import axios from "axios";

export async function getFilmData(filmID) {
  const API_KEY = "7aee721e4b2b3a73223b2ae7643ae753";

  return axios
    .get(`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}`)
    .then(({ data }) => data);
}
