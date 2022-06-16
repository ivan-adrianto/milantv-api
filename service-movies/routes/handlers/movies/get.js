const { movie, category, review } = require("../../../models");
movie.hasOne(category, { foreignKey: "id", sourceKey: "category_id" });

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const movies = await movie.findOne({
      include: [{ model: category }],
      where: { id },
      attributes: ["id", "title", "banner", "release_date", "youtube_link", "poster", "synopsis", "rating", "total_comments"],
    });
    const myReview = await review.findAll({
      where: { movie_id: id, user_id: req.query.user_id },
    });
    
    if (myReview.length > 0 && movies) {
      movies.dataValues.is_reviewed = true;
    } else if (movies) {
      movies.dataValues.is_reviewed = false;
    }
    
    if (movies === null) {
      return res.status(404).json({
        status: "error",
        message: "Movie not found",
      });
    }
    res.json({
      status: "success",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
