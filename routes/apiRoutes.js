const apiRouter = require('express').Router();
const notesHelper = require('../db/notesHelper');

// This API route is a GET Route for retrieving all the notes
app.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // This API route is a POST Route for a new note
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
      res.error('Error in adding note');
    }
  });

  module.exports = apiRouter;