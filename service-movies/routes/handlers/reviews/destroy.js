const { review, movie } = require("../../../models");
review.hasOne(movie, { foreignKey: "id", sourceKey: "movie_id" });

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "error",
        message: "Please provide review id",
      });
    }

    const dataReview = await review.findOne({
      where: { id },
    });
    if (!dataReview) {
      return res.status(404).json({
        status: "error",
        message: "Review not found",
      });
    }

    const movie_id = dataReview.dataValues.movie_id;
    await review.destroy({ where: { id } });

    const dataMovie = await movie.findOne({ where: {id: movie_id} });
    const prevData = dataMovie.dataValues;
    await dataMovie.update({
      total_rating: prevData.total_rating - dataReview.dataValues.rating,
      rating:
        (prevData.rating * prevData.total_reviews -
          dataReview.dataValues.rating) /
        (prevData.total_reviews - 1),
      total_reviews: prevData.total_reviews - 1,
      total_comments: dataReview.dataValues.comment || dataReview.dataValues.title
        ? prevData.total_comments - 1
        : prevData.total_comments,
    });

    res.json({
      status: "success",
      message: `Your review has been deleted`,
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
