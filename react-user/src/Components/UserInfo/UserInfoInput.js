import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import "./UserInfoInput.css";

function UserInfoInput(props) {
  const [usernameInfo, setUsernameInfo] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUsername = (e) => {
    setUsernameInfo(e.target.value);
  };

  const addUserAge = (e) => {
    setUserAge(e.target.value);
  };

  const closeError = () => {
    setError(null);
  };

  const addUserInfoHandeler = (e) => {
    e.preventDefault();
    if (usernameInfo.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid Error",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.addUser(usernameInfo, +userAge);
    setUserAge("");
    setUsernameInfo("");
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          close={closeError}
        />
      )}
      <Card>
        <form onSubmit={addUserInfoHandeler}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" value={usernameInfo} onChange={addUsername} />
            <label>Age (Years) </label>
            <input type="number" value={userAge} onChange={addUserAge} />
          </div>
          <button type="submit" className="user-button">
            Add User
          </button>
        </form>
      </Card>
    </div>
  );
}

export default UserInfoInput;
