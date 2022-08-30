import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsList.module.css";

function MealsList(props) {
  return (
    <li className={classes.list} key={props.meal.id}>
      <div className={classes.description}>
        <p>{props.meal.name}</p>
        <span>{props.meal.description}</span>
        <p>{props.meal.price}</p>
      </div>

      <MealItemForm />
    </li>
  );
}

export default MealsList;
