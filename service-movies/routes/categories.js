const express = require("express");
const router = express.Router();

const categoriesHandler = require("./handlers/categories");

router.get("/", categoriesHandler.getAll);

module.exports = router;
