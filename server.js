const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//HTML routes. GET /notes should return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

//HTML routes. Get * should return index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

//API routes should be created
//GET /api/notes should read to db.json file and return all saved notes as JSON
app.get('api/notes', (req, res) => {
    res.json(notes);
})
//POST /api/notes should receive a new note to save on the request body and add it to the db.json file
app.post('api/notes', (req, res) => {
    req.body.id = notes.length.toString;
    let newNote = createNote(req.body.id, notes);
    res.json(newNote);
})

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})