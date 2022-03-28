const { category } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const data = await category.findAll();
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
