const router = require("express").Router();
const db = require("../db/db.json");

router.post("/notes", ({ body }, res) => {
    body.id = db.length + 1;
    db.push(body)
    res.json(db);
    console.log("DATABASE", db)
})

router.get("/notes")

router.delete('/notes/:id')

module.exports = router;