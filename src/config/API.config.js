const { default: axios } = require("axios");

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});
export default API;
