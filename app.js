const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Full CI/CD Pipeline Working!' });
});

module.exports = app;