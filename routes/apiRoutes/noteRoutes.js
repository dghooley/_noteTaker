const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, deleteNote } = require('../../lib/notes')

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
    console.log("DATABASE", db)
})

router.get("/notes", (req, res) => {
    let saved = notes;
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;