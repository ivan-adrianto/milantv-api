const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MOVIE } = process.env;

const api = apiAdapter(URL_SERVICE_MOVIE);

module.exports = async (req, res) => {
  try {
    const watchlist = await api.delete(`/reviews/${req.params.id}`);
    return res.json(watchlist.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
