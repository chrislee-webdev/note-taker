const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

//HTML routes. GET /notes should return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

//HTML routes. Get * should return index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})