const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, deleteNote, editNote, findById } = require('../../lib/notes')
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
//    let saved = notes;
    res.json(notes);
});

router.post("/notes", (req, res) => {
    if (!req.body.id) {    
    req.body.id = uuidv4();
    createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }
//    let note = createNewNote(req.body, notes);
    res.json(req.body);
//    console.log("DATABASE", db)
})

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);
//    deleteNote(notes, req.params.id);
    deleteNote(note, notes);
    res.json();
})

module.exports = router;