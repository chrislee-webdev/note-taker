const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('data/notes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

function createNewNote(body, notesArray) {
    console.log(body);
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirnamr, './data/notes.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return note;
}

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
app.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(notes);
})
//POST /api/notes should receive a new note to save on the request body and add it to the db.json file
app.post('/api/notes', (req, res) => {
    req.body = notes.length.toString();
    let note = createNewNote(req.body.id, notes);
    res.json(note);
})

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})