import React, { useState } from "react";
import Card from "../UI/Card";
import "./UserInfoInput.css";

function UserInfoInput(props) {
  const [usernameInfo, setUsernameInfo] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUsername = (e) => {
    setUsernameInfo(e.target.value);
  };

  const addUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const addUserInfoHandeler = (e) => {
    e.preventDefault();
    const userData = [
      {
        id: Math.random(),
        user: usernameInfo,
        age: +userAge,
      },
    ];
    props.addUser(userData);
    setUserAge("");
    setUsernameInfo("");
  };

  return (
    <Card>
      <form onSubmit={addUserInfoHandeler}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" value={usernameInfo} onChange={addUsername} />
          <label>Age (Years) </label>
          <input type="number" value={userAge} min="0" onChange={addUserAge} />
        </div>
        <button type="submit" className="user-button">
          Add User
        </button>
      </form>
    </Card>
  );
}

export default UserInfoInput;
