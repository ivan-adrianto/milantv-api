const { movie, category } = require("../../../models");
movie.hasOne(category, { foreignKey: "id", sourceKey: "category_id" });

module.exports = async (req, res) => {
  try {
    if (req.query.category) {
      const movies = await movie.findAll({
        where: { category_id: req.query.category },
        include: [{ model: category }],
        attributes: [
          "id",
          "title",
          "banner",
          "release_date",
          "total_comments",
          "rating",
        ],
      });
      return res.status(200).send(movies);
    }
    const movies = await movie.findAll({
      include: [{ model: category }],
      attributes: [
        "id",
        "title",
        "banner",
        "release_date",
        "total_comments",
        "rating",
      ],
    });
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
