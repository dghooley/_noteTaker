const fs = require("fs");
const path = require("path");

const createNewNote = (note, notesArray) => {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        },null, 2))
//        return note;
}

const editNote = (editedNote, notesArray) => {
    const index = notesArray.findIndex(note => note.id === editedNote.id);
    notesArray.splice(index, 1);
    notesArray.splice(index, 0, editedNote);
}

const deleteNote = (note, notesArray, id) => {
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}

module.exports = { createNewNote, editNote, deleteNote }