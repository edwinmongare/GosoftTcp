const axios = require("axios");

const api = axios.create({
  baseURL: `http://localhost:5002/boreholeMetersApi/`,
});

module.exports = { api };
