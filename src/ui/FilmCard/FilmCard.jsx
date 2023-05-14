import "./FilmCard.css";

export function FilmCard({ title, year, rating, imgURL }) {
  return (
    <div className="film-card__box">
      <img
        className="film-card__poster"
        src="/src/assets/img/rating.png"
        alt=""
      />
      <div className="film-card__text-container">
        <h1 className="film-card__title">t</h1>
        <p className="film-card__descr">d</p>
        <div className="film-card__info-container">
          <div className="film-card__info-rating">
            <img
              className="rating-icon"
              src="/src/assets/img/rating.png"
              alt="IMDb-rating"
            />
            <p className="film-card__descr">d</p>
          </div>
          <div className="film-card__options-container">
            <button className="film-card__add-my-list">
              <img
                className="heart-icon"
                src="/src/assets/img/heart.svg"
                alt="heart-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
