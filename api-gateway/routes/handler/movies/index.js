const getAllMovies = require("./getAllMovies");
const getMovieById = require("./getMovieById");
const getMovieByTitle = require("./getMovieByTitle");
const getMovieByCategory = require("./getMovieByCategory");
const createReview = require("./createReview");
const getReviews = require("./getReviews");
const getMyReviews = require("./getMyReviews");
const getReviewDetail = require("./getReviewDetail");
const updateReview = require("./updateReview");
const getActors = require("./getActors");
const createWatchlist = require("./createWatchlist");
const deleteWatchlist = require("./deleteWatchlist");
const getCategories = require("./getCategories");

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  getMovieByCategory,
  createReview,
  getReviews,
  getMyReviews,
  getReviewDetail,
  getActors,
  createWatchlist,
  deleteWatchlist,
  getCategories,
  updateReview,
};
