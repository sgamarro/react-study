import React from "react";
import Card from "../UI/Card";
import "./UserDisplay.css";

function UserDisplay(props) {
  return (
    <Card>
      <ul>
        {props.displayData.map((user) => (
          <li key={user.id}>
            {user.user} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserDisplay;
