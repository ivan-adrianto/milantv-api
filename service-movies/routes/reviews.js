const express = require('express');
const router = express.Router();

const reviewsHandler = require('./handlers/reviews');

router.get('/:id', reviewsHandler.getByMovie);
router.post('/', reviewsHandler.create);

module.exports = router;
