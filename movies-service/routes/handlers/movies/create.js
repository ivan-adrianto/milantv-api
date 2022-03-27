const { movie } = require("../../../models");
module.exports = async (req, res) => {
  try {
    const { title, banner, release_date, youtube_link, category_id } = req.body;
    const data = await movie.create({
      title,
      banner,
      release_date,
      youtube_link,
      category_id,
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
