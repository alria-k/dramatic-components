import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { FilmCard } from "../index";
import "./FilmsCardSlider.css";

export function FilmsCardSlider({ data }) {
  return (
    <div className="films-slider__box">
      <h1 className="films-slider__title">MOVIES YOU MUST WATCH</h1>
      <div className="films-slider">
        <ScrollMenu separatorClassName="gap-container">
          {data.map((filmsData, index) => (
            <FilmCard key={index} itemId={index} />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}
