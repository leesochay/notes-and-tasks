// Import Express.js
// Import path
const express = require('express');
const path = require('path');
const { readFromFile, readAndAppend } = require('./db/notesHelper');

// Initialize an instance of Express.js
const app = express();

const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

// This API route is a GET Route for retrieving all the tips
app.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// This API route is a POST Route for a new UX/UI tip
app.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a tip`);

  const { title, text } = req.body;

  if (req.body) {
    const newTask = {
      title,
      text,
    };

    readAndAppend(newTask, './db/db.json');
    res.json(`Task added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});


// listen for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);