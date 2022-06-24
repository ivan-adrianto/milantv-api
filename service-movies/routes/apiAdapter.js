const axios = require("axios");

const { TIMEOUT } = process.env;

module.exports = (baseUrl, token) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: parseInt(TIMEOUT),
    headers: {
      Authorization: token || "",
    },
  });
};
