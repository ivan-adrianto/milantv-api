const { Op } = require("sequelize");
const { movie, category } = require("../../../models");
movie.hasOne(category, { foreignKey: "id", sourceKey: "category_id" });

module.exports = async (req, res) => {
  const category_id = req.query.category_id || "";
  const title = req.query.title || "";
  try {
    const movies = await movie.findAll({
      where: { category_id: { [Op.like]: `%${category_id}%` }, title: { [Op.like]: `%${title}%` } },
      include: [{ model: category }],
      attributes: [
        "id",
        "title",
        "banner",
        "synopsis",
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
