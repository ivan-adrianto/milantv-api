const express = require("express");
const router = express.Router();

const reviewsHandler = require("./handlers/reviews");

router.get("/my-reviews", reviewsHandler.getByUserId); 
router.get("/:id", reviewsHandler.getByMovie);
router.post("/", reviewsHandler.create);

module.exports = router;
