import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Meals.module.css";
import MealsList from "./MealsList";

function AvalibleMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://hook-api-a7702-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.mealsLoading}>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p className={classes.mealsLoading}>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealsList
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
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
