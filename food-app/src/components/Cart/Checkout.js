import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandeler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={confirmHandeler} className={classes.form}>
      <div className={classes.control}>
        <labe htmlFor="name">Name</labe>
        <input type={"text"} id="name" />
      </div>
      <div className={classes.control}>
        <labe htmlFor="street">Street</labe>
        <input type={"text"} id="street" />
      </div>
      <div className={classes.control}>
        <labe htmlFor="postal">Zip code</labe>
        <input type={"text"} id="postal" />
      </div>
      <div className={classes.control}>
        <labe htmlFor="city">City</labe>
        <input type={"text"} id="city" />
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
