const express = require("express");
const router = express.Router();

const moviesHandler = require("./handlers/movies");

router.get("/", moviesHandler.getAll);
router.get("/search", moviesHandler.getByTitle);
router.get("/:id", moviesHandler.get);
router.post("/", moviesHandler.create);

module.exports = router;
