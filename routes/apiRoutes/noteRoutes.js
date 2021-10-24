var express = require('express');
var router = express.Router();
var { createNewNote } = require('../../lib/notes');
var { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
    res.json(result);
    } else {
    res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    console.log(notes);

    const note = createNewNote(req.body, notes);
    res.json(note);
}
);

module.exports = router;