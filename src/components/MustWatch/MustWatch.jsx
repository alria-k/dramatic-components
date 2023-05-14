import { FilmsCardSlider } from "./components";
import { getFilmData } from "../index";

const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const lol = getFilmData();
export function MustWatch() {
  const pop = lol.read();
  //   dataFetch().film.read();
  return <FilmsCardSlider data={mockArr} />;
}
