const { review } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  try {
    const { movie_id, user_id, rating, comment, title } = req.body;
    const schema = {
      movie_id: "number|empty:false",
      user_id: "number|empty:false",
      rating: "number|empty:false",
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const data = await review.findOne({
      where: { id: movie_id },
    });
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "review not found",
      });
    }

    await data.update({
      rating,
      title,
      comment,
      movie_id,
      user_id,
    });

    return res.json({
      status: "success update review",
      data: {
        rating,
        title,
        comment,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
