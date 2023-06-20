// Importing express.Router, file system, UUID (for generating ID number), and fsUtils (read, write, append)
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../db/fsUtils');

// GET Route for retrieving all the notes
router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
router.post('/api/notes', (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

// Append new notes to the db.json file
readAndAppend(newNote, './db/db.json');
res.json(`Note added successfully`);
} else {
res.error('Error in adding note');
}
});

// DELETE Route for a note
router.delete('/api/notes/:id', (req, res) => {
  const taskId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((task) => task.id !== taskId);
      // Save that array to the filesystem
      writeToFile('./db/db.json', result);
      // Respond to the DELETE request
      res.json(`Item ${taskId} has been deleted`);
    });
});

// Exports the router object
module.exports = router;