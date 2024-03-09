const { default: axios } = require("axios");

const API = axios.create({
  baseURL: "http://localhost:3000/api/",
});
export default API;
