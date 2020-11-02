// Require Express.js
const express = require('express');
// Initialize Express
const app = express();
// Express Port
const port = 3000;
// Require Path
const path = require('path');
// Require Body Parser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// @desc Returns "Welcome to Data Representation & Querying"
// @route GET /
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying');
});

// @desc Returns "Hello <YOUR_NAME>"
// @route GET /hello/:name
app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// @desc Returns JSON of Movies
// @route GET /api/movies
app.get('/api/movies', (req, res) => {
  // Movies Array
  const mymovies = [
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
    },
    {
      Title: 'Captain America: Civil War',
      Year: '2016',
      imdbID: 'tt3498820',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'
    }
  ];

  // Returns Movies in JSON format
  res.json({ movies: mymovies });
});

// @desc Returns html file
// @route GET /test
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// @desc Returns "Hello <YOUR_FIRSTNAME> <YOUR_LASTNAME>"
// @route GET /name
app.get('/name', (req, res) => {
  res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
});

// @desc Returns "Hello <YOUR_FIRSTNAME> <YOUR_LASTNAME>"
// @route POST /name
app.post('/name', (req, res) => {
  res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
});

// App listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
