const { watchlist, movie } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();
watchlist.hasOne(movie, { foreignKey: "id", sourceKey: "movie_id" });
module.exports = async (req, res) => {
  try {
    const { movie_id, user_id } = req.body;
    const schema = {
      movie_id: "number|empty:false",
      user_id: "number|empty:false",
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

    const existingWatchlists = await watchlist.findOne({
      where: {
        movie_id,
        user_id,
      },
    });
    if (existingWatchlists) {
      return res.status(403).json({
        status: "error",
        message: `${dataMovie.title} is already in your watchlist`,
      });
    }

    await watchlist.create({
      movie_id,
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.json({
      status: "success",
      message: `${dataMovie.title} has been added to your watchlist`,
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
