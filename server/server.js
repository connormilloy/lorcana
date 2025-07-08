require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient } = require('mongodb');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { pipeline } = require('stream');
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
  if (!url) {
    console.warn('Missing image URL');
    return res.status(400).send('Missing image URL');
  }

  try {
    const upstreamRes = await fetch(url);

    if (!upstreamRes.ok) {
      console.error(
        `Failed to fetch image from source: ${upstreamRes.status} ${upstreamRes.statusText}`
      );
      return res.status(502).send('Failed to fetch image from source');
    }

    if (!upstreamRes.body) {
      console.error('Response body is null or undefined');
      return res.status(502).send('Invalid image response');
    }

    res.setHeader(
      'Content-Type',
      upstreamRes.headers.get('content-type') || 'application/octet-stream'
    );
    res.setHeader('Access-Control-Allow-Origin', '*');

    pipeline(upstreamRes.body, res, (err) => {
      if (err) {
        console.error('Pipeline failed:', err);
        res.status(500).send('Streaming error');
      }
    });
  } catch (err) {
    console.error('Unexpected error in image proxy:', err);
    res.status(500).send('Unexpected server error');
  }
});
