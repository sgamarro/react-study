import React from "react";
import CommentsItem from "./CommentsItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentsItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
