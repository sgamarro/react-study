import React from "react";
import Card from "../UI/Card";
import UserDisplayList from "./UserDisplayList/UserDisplayList";
function UserDisplay(props) {
  return (
    <Card>
      <ul>
        {props.displayData.map((user) => (
          <UserDisplayList
            key={user.id}
            name={user.user}
            age={user.age}
          ></UserDisplayList>
        ))}
      </ul>
    </Card>
  );
}

export default UserDisplay;
