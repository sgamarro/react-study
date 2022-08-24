import React from "react";

function UserDisplayList(props) {
  return (
    <li>
      {props.name} ({props.age})
    </li>
  );
}

export default UserDisplayList;
