const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.DB_URI);

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err.message);
  } else {
    console.log('Connected to MongoDB');
  }
});

module.exports = client;