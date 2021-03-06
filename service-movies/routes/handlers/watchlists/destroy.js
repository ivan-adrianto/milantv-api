const { watchlist, movie } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();
watchlist.hasOne(movie, { foreignKey: "id", sourceKey: "movie_id" });
module.exports = async (req, res) => {
  try {
    const { user_id, movie_id } = req.query;
    const schema = {
      user_id: "string|empty:false",
      movie_id: "string|empty:false",
    };

    const validate = v.validate(req.query, schema);

    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate[0].message,
      });
    }

    const data = await watchlist.destroy({
      where: { movie_id, user_id },
    });
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "Watchlist not found",
      });
    }
    res.json({
      status: "success",
      message: `The movie has been removed from your watchlist`,
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
