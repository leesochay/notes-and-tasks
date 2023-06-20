// Importing express and path for this router
const express = require('express');
const router = express.Router();
const path = require('path');

// Routes '/notes' to the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

// Catch all wildcard to route all but '/notes' to the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Exports the router object
  module.exports = router;