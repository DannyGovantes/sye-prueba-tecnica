import axios from "axios";
export const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  timeout: 1000,
});
