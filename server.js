// Import Express.js
const express = require('express');

// Initialize an instance of Express.js
const app = express();

const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// listen for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);