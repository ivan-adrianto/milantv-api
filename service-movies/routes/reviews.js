const express = require("express");
const router = express.Router();

const reviewsHandler = require("./handlers/reviews");

router.get("/my-reviews", reviewsHandler.getByUserId);
router.get("/:id", reviewsHandler.getByMovie);
router.post("/", reviewsHandler.create);
router.put("/", reviewsHandler.update);
router.delete("/:id", reviewsHandler.destroy);

module.exports = router;
