# Notes and Tasks

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  - [Description](#description)
  - [Installations](#installations)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Description
This project is a demonstration of utilizing Express.js and modularized routing to save and retrieve data from a JSON. Specifically, the is a note taker application that wil take a users input (title and text fields), and save the input until deleted from the JSON file. This application features two main routes. First, html routing will bring the user to the main index page or the notes page (where the notes/tasks can be entered). Second, api routing performs the GET, POST, and DELETE functions for the notes that are entered and removed fromt he page.

Accptance Crieria includes:
 - Starting at a landing page with a link to a notes page.
 - On the notes page, existing notes are listed in the left-hand column with empty fields to enter a new note title and the note’s text in the right-hand column.
 - A Save icon appears in the navigation at the top of the page when a note title and text are entered.
 - Clicking on the Save icon will save the new note and it is moved to the left-hand column with the other existing notes.
 - Clicking on an existing note in the left-hand column will have it appear in the right-hand column.
 - Clicking on the Write icon (+) presents empty Title and text fields for a new note.

## Installations
- [Node.js](https://nodejs.org/en/)
- [Express package](https://www.npmjs.com/package/express)
- [uuid package](https://www.npmjs.com/package/uuid)
- [uuid4 package](https://www.npmjs.com/package/uuidv4)
- [Heroku](https://www.heroku.com)

## Usage
The applciation runs upon entering "node server.js" in the command line. From here, navigate to your browser and enter "localhost:3001". This is the local port in which the application is listening.
You will be presented with the index.html file where the "Get Started" button can be clicked to take you to the notes page. In this page, notes can be entered (title and text), saved (by clicking the save icon), and deleted (clicking the trash can icon). New notes can be entered by clicking the "+" icon in the upper right of the navigation. Below are screenshots.

![Note Taker Homepage](https://github.com/leesochay/notes-and-tasks/blob/main/images/NoteTakerHomepage.png)
![Note Taker Notes Page](https://github.com/leesochay/notes-and-tasks/blob/main/images/NoteTakerNotesPage.png)
![Note Taker Note to Save](https://github.com/leesochay/notes-and-tasks/blob/main/images/NoteTakerNotetoSave.png)
![Note Taker Saved Note](https://github.com/leesochay/notes-and-tasks/blob/main/images/NoteTakerSavedNote.png)

## Contributing
Hat tips to
 - Class modules and activities: These really helped me out with routing middleware code as well as the get, post, append, and deleted functions.
 - [MDN Express tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) for routes syntax and functionality.
 - [How to Setup Routes with Express Router | Node.js & Express tutorials for Beginners](https://youtu.be/Zh7psmf1KAA). Dave Gray YouTube video helped in providing a deeper understanding of routing for modular 
   applications.

## License
MIT License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: MIT](https://choosealicense.com/licenses/mit/) for more information.
