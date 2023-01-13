import axios from "axios";

export const api = axios.create({
  baseURL: "https://posts2-api.global.ssl.fastly.net",
});
