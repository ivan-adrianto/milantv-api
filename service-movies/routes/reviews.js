const express = require("express");
const router = express.Router();

const reviewsHandler = require("./handlers/reviews");

router.get("/my-reviews", reviewsHandler.getByUserId);
router.get("/my-reviews/:id", reviewsHandler.getReviewDetail);
router.get("/:id", reviewsHandler.getByMovie);
router.post("/", reviewsHandler.create);
router.put("/", reviewsHandler.update);

module.exports = router;
