const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MOVIE } = process.env;

const api = apiAdapter(URL_SERVICE_MOVIE);

module.exports = async (req, res) => {
  try {
    let body = req.body;
    body.user_id = req.user.data.id;
    const watchlist = await api.post("/watchlists", body);
    return res.json(watchlist.data);
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
