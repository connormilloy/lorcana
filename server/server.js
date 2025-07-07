require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient } = require('mongodb');

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

app.get('/lorcana/random-card', async (req, res) => {
  try {
    const card = await db
      .collection('lorcana-cards')
      .aggregate([{ $sample: { size: 1 } }])
      .next();
    res.json(card);
  } catch (err) {
    console.error('Failed to fetch random card:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
