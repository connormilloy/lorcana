require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient } = require('mongodb');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

let db;

MongoClient.connect(process.env.DB_CONNECTION_STRING)
  .then((client) => {
    db = client.db('milloy-dev');
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const rateLimiter = rateLimit({
  windowMs: 2000,
  max: 1,
  message: {
    error: 'Too many requests, please wait before trying again.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors());

app.get('/lorcana/random-card', rateLimiter, async (req, res) => {
  try {
    const card = await db
      .collection('lorcana-cards')
      .aggregate([{ $sample: { size: 1 } }])
      .next();
    res.json(card);
  } catch (err) {
    console.error('Failed to fetch random card:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/lorcana/image-proxy', rateLimiter, async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing image URL');

  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');
    const buffer = await response.arrayBuffer();

    res.set('Content-Type', contentType);
    res.set('Access-Control-Allow-Origin', '*'); // optional if canvas needed on frontend
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send('Image fetch failed');
  }
});
