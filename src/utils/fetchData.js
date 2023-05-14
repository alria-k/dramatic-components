import axios from "axios";
import { wrapPromise } from "./wrapPromise";

const API_KEY = "7aee721e4b2b3a73223b2ae7643ae753";

export function getFilmData() {
  const promise = axios
    .get(`https://api.themoviedb.org/3/movie/85?api_key=${API_KEY}`)
    .then(({ data }) => data);

  return wrapPromise(promise);
}
