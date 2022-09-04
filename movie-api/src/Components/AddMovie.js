import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitHandeler = (e) => {
    e.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  };

  return (
    <form className={classes.form} onSubmit={submitHandeler}>
      <div className={classes["form-control"]}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef} />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button className={classes.btn}>Add Movie</button>
    </form>
  );
};

export default AddMovie;
