const express = require('express');
const app = express();
// const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;


// Middleware for the public folder, json data, urlencoded data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle http requests and route them correctly 
app.use(apiRoutes);
app.use(htmlRoutes);

// listen for incoming connections on the specified port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})