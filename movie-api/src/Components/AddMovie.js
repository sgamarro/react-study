import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = () => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitHandeler = (e) => {
    e.preventDefault();

    const movie = {
      title: titleRef,
      openingText: openingTextRef,
      releaseDate: releaseDateRef,
    };

    console.log(movie);
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
