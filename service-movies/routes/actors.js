const express = require('express');
const router = express.Router();

const actorsHandler = require('./handlers/actors');

router.get('/:id', actorsHandler.get);

module.exports = router;
