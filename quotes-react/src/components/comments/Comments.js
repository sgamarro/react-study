import React, { useState } from "react";
import classes from "./Comments.module.css";
import NewComments from "./NewComments";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandeler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandeler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewComments />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
