import React, { useRef } from "react";
import Card from "../UI/Card";
import LoadingSpiner from "../UI/LoadingSpiner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorRef = useRef();
  const textInputRef = useRef();

  const submitFromHandeler = (e) => {
    e.preventDefault();
    const enteredAuthor = authorRef.current.value;
    const enteredText = textInputRef.current.value;
    props.onAddQuotes({ author: enteredAuthor, text: enteredText });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFromHandeler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpiner />
          </div>
        )}
        <div className={classes.control}>
          <label>Author</label>
          <input type={"text"} ref={authorRef} id="author" />
        </div>
        <div className={classes.control}>
          <label>Text</label>
          <textarea id="textarea" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn"> Add Quotes</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
