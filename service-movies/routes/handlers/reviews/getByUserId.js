const { review, movie } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const reviews = await review.findAll({
      where: { user_id: req.query.user_id },
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
