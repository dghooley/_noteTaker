var express = require('express');
var router = express.Router();
var noteRoutes = require('../apiRoutes/noteRoutes');

router.use(noteRoutes);

module.exports = router;
