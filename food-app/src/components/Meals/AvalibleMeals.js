import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Meals.module.css";
import MealsList from "./MealsList";

const DummyMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "California Roll (20roll)",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Ramen",
    description: "Spicy Chicken Ramen",
    price: 15.55,
  },
  {
    id: "m3",
    name: "Sesame Chicken ",
    description: "Steamed Rice, Sesame chiken",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chow-men ",
    description: "Rice Noodles, Stir-Fry Beef, Vegetables",
    price: 13.55,
  },
];

function AvalibleMeals() {
  const mealsList = DummyMeals.map((meal) => {
    return <MealsList meal={meal} />;
  });

  return (
    <section className={classes.avalible}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvalibleMeals;
