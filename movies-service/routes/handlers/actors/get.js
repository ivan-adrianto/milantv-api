const { actor } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const data = await actor.findAll({
      where: { movie_id: req.params.id },
      attributes: ["id", "name", "photo"],
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
