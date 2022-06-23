const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MOVIE } = process.env;

const api = apiAdapter(URL_SERVICE_MOVIE);

module.exports = async (req, res) => {
  try {
    const movie = await api.get("/movies", { params: req.query });
    return res.json(movie.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    } else {
      return res.status(500).json({ status: "error", message: error.message });
    }
  }
};
