const express = require('express');
// const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for the public folder, json data, urlencoded data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// listen for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
