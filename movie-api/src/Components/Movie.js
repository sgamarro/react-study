import React from "react";
import classes from "./Movies.module.css";

function Movie(props) {
  return (
    <li className={classes.list}>
      <h2>{props.title}</h2>
      <h3>{props.openingText}</h3>
      <p>{props.releaseDate}</p>
    </li>
  );
}

export default Movie;
