import React from "react";
import Input from "../UI/Input/Input";
import clasess from "./MealsList.module.css";

function MealItemForm(props) {
  return (
    <form>
      <Input type="text" />
      <button className={clasess.add}> + Add</button>
    </form>
  );
}

export default MealItemForm;
