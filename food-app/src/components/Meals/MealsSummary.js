import React from "react";
import classes from "./Meals.module.css";

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to you</h2>
      <p>Choose a meal from the menu below, and add to cart </p>
      <p>
        All meals are prepare with high quality ingredients, just in-time and of
        course by experienced chefs !!
      </p>
    </section>
  );
}

export default MealsSummary;
