import React from "react";
import Movie from "./Movie";
import classes from "./Movies.module.css";

function MovieList(props) {
  return (
    <ul className={classes["movie-list"]}>
      {props.movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        );
      })}
    </ul>
  );
}

export default MovieList;
