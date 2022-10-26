import React from "react";
import classes from "./NoQuotesForm.module.css";

const NoQuotesFom = (props) => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a className="btn">Add a Quote</a>
    </div>
  );
};

export default NoQuotesFom;
