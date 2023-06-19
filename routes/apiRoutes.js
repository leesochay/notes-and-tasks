const apiRouter = require('express').Router();
const {
  readFromFile,
  readAndAppend,
} = require('../db/notesHelper');

// GET Route for retrieving all the notes
apiRouter.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for a new note
apiRouter.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newTask = {
      title,
      text,
    };

    readAndAppend(newTask, './db/db.json');
    res.json(`Tip added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = apiRouter;