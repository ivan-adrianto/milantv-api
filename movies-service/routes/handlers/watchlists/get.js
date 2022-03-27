const { watchlist, movie } = require("../../../models");
watchlist.hasOne(movie, { foreignKey: "id", sourceKey: "movie_id" });

module.exports = async (req, res) => {
  try {
    const data = await watchlist.findAll({
      where: { user_id: req.params.id },
      include: [
        {
          model: movie,
          attributes: [
            "id",
            "title",
            "banner",
            "rating",
          ],
        },
      ],
      attributes: ["id"],
    });
    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
