const { URL_SERVICE_USER } = process.env;
const { review } = require("../../../models");
const apiAdapter = require("../../apiAdapter");

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const reviews = await review.findAll({
      where: { movie_id: req.params.id },
      attributes: ["rating", "comment", "user_id"],
    });
    const users = await api.get("/users");
    const data = reviews?.map((review) => {
      const user = users.data.data.find((user) => user.id === review.user_id);
      return {
        rating: review.rating,
        comment: review.comment,
        name: user?.fullname,
        avatar: user?.avatar,
      };
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
