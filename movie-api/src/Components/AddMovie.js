import React, { useRef } from "react";

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
    <form onSubmit={submitHandeler}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef} />
      </div>
      <div>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
