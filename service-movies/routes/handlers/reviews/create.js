const { review, movie } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();
review.hasOne(movie, { foreignKey: "id", sourceKey: "movie_id" });
module.exports = async (req, res) => {
  try {
    const { movie_id, user_id, rating, comment } = req.body;
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

    const dataMovie = await movie.findOne({
      where: { id: movie_id },
    });
    if (!dataMovie) {
      return res.status(404).json({
        status: "error",
        message: "Movie not found",
      });
    }

    const existingReview = await review.findOne({
      where: {
        movie_id,
        user_id,
      },
    });
    if (existingReview) {
      return res.status(403).json({
        status: "error",
        message: "You are already reviewed this movie",
      });
    }

    await review.create({
      movie_id,
      user_id,
      rating,
      comment,
    });
    await dataMovie.update({
      total_rating: dataMovie.total_rating + 1,
      rating:
        (dataMovie.rating * dataMovie.total_reviews + rating) /
        (dataMovie.total_reviews + 1),
      total_reviews: dataMovie.total_reviews + 1,
      total_comments: comment
        ? dataMovie.total_comments + 1
        : dataMovie.total_comments,
    });
    res.json({
      status: "success",
      data: {
        rating,
        comment,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
