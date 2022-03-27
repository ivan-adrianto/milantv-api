const express = require('express');
const router = express.Router();

const watchlistsHandler = require('./handlers/watchlists');

router.get('/:id', watchlistsHandler.get);
router.post('/', watchlistsHandler.create);
router.delete('/:id', watchlistsHandler.destroy);

module.exports = router;
