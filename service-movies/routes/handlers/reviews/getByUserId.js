const { URL_SERVICE_USER } = process.env;
const { review } = require("../../../models");
const apiAdapter = require("../../apiAdapter");

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const reviews = await review.findAll({
      where: { user_id: req.query.user_id },
      attributes: ["id" ,"rating", "comment", "user_id"],
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
