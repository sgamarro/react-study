import React from "react";
import classes from "./CommentItem.module.css";

const CommentsItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentsItem;
