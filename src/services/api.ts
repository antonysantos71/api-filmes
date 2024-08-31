import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d71b1c253616a530b86a774bcd2b865d",
    language: "pt-BR"
  }
});