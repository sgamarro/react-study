import React from "react";
import "./CourseGoalItems.css";

function CourseGoalItem(props) {
  const deleteHandeler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandeler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
