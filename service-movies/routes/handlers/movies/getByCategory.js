const { Op } = require("sequelize");
const { movie, category } = require("../../../models");
movie.hasOne(category, { foreignKey: "id", sourceKey: "category_id" });

module.exports = async (req, res) => {
  try {
    const movies = await movie.findAll({
      where: { category_id: req.query.category_id },
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
