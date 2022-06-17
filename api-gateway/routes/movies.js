const express = require("express");
const router = express.Router();

const moviesHandler = require("./handler/movies");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", moviesHandler.getAllMovies);
router.get("/search", moviesHandler.getMovieByTitle);
router.get("/search-category", moviesHandler.getMovieByCategory)
router.get("/categories", moviesHandler.getCategories);
router.get("/:id", verifyToken, moviesHandler.getMovieById);
router.get("/reviews/my-reviews", verifyToken, moviesHandler.getMyReviews);
router.get("/reviews/:id", moviesHandler.getReviews);
router.post("/reviews", verifyToken, moviesHandler.createReview);
router.put("/reviews", verifyToken, moviesHandler.updateReview);
router.get("/actors/:id", moviesHandler.getActors);
router.post("/watchlists", verifyToken, moviesHandler.createWatchlist);
router.delete("/watchlists", verifyToken, moviesHandler.deleteWatchlist);

module.exports = router;
