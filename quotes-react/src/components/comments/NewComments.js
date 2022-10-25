import React, { useRef } from "react";
import classes from "./NewComments.module.css";
const NewComments = (props) => {
  const commentsRef = useRef();

  const submitFormHandeler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label>Your Comment</label>
        <textarea id="comment" rows="5" ref={commentsRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewComments;
