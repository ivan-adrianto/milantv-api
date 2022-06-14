const { movie, category } = require("../../../models");
movie.hasOne(category, { foreignKey: "id", sourceKey: "category_id" });

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const movies = await movie.findOne({
      include: [{ model: category }],
      where: { id },
      attributes: ["id", "title", "banner", "release_date", "youtube_link", "poster", "rating", "total_comments"],
    });
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
