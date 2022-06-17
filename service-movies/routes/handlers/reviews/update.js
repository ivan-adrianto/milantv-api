const { review, movie } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const { movie_id, user_id, rating, comment, title } = req.body;
    const schema = {
      movie_id: "number|empty:false",
      user_id: "number|empty:false",
      rating: "number|empty:false",
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const dataReview = await review.findOne({
      where: { movie_id, user_id },
    });
    if (!dataReview) {
      return res.status(404).json({
        status: "error",
        message: "review not found",
      });
    }

    const dataMovie = await movie.findOne({
      where: { id: movie_id },
    });

    let totalComments = dataMovie.total_comments;
    if (
      ((comment || title) && dataReview.dataValues.comment) ||
      dataReview.dataValues.title
    ) {
      totalComments = dataMovie.total_comments;
    } else if (
      (comment || title) &&
      !dataReview.dataValues.comment &&
      !dataReview.dataValues.title
    ) {
      totalComments = dataMovie.total_comments + 1;
    } else if (
      !comment &&
      !title &&
      dataReview.dataValues.comment &&
      dataReview.dataValues.title
    ) {
      totalComments = dataMovie.total_comments - 1;
    }
    await dataMovie.update({
      total_rating:
        dataMovie.total_rating - dataReview.dataValues.rating + rating,
      rating:
        (dataMovie.total_rating - dataReview.dataValues.rating + rating) /
        dataMovie.total_reviews,
      total_comments: totalComments,
    });

    await dataReview.update({
      rating,
      title,
      comment,
      movie_id,
      user_id,
    });

    return res.json({
      status: "success update review",
      data: {
        rating,
        title,
        comment,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
