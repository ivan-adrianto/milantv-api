const { URL_SERVICE_USER } = process.env;
const { review, movie } = require("../../../models");
const apiAdapter = require("../../apiAdapter");

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const reviews = await review.findOne({
      where: { user_id: req.query.user_id, movie_id: req.params.id },
      attributes: ["id" ,"rating", "title", "comment", "user_id", "created_at", "updated_at"],
      include: [{ model: movie }],
    });

    res.json({
      status: "success",
      data: reviews,
    });
    
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
