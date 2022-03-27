const { watchlist, movie } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();
watchlist.hasOne(movie, { foreignKey: "id", sourceKey: "movie_id" });
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const schema = {
      id: "string|empty:false",
    };

    const validate = v.validate(req.params, schema);

    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const data = await watchlist.destroy({
      where: { id },
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
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
