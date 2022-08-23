import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const goalInputChangeHandeler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandeler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandeler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandeler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
