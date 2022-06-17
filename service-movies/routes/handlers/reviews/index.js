const create = require("./create");
const getByMovie = require("./getByMovie");
const getByUserId = require("./getByUserId");
const getReviewDetail = require("./getReviewDetail");
const update = require("./update");
const destroy = require("./destroy");

module.exports = {
  create,
  getByMovie,
  getByUserId,
  update,
  getReviewDetail,
  destroy,
};
