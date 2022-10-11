import React, { useState } from "react";

const BasicForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const nameIsValid = nameInput !== "";
  const lastNameIsValid = lastNameInput !== "";
  const emailIsValid = emailInput.includes("@");

  const nameInputChange = (e) => {
    setNameInput(e.target.value);
  };
  const lastNameInputChange = (e) => {
    setLastNameInput(e.target.value);
  };

  const emailInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const submitFormHandeler = (e) => {
    e.preventDefault();

    if (!nameIsValid) {
      return;
    } else if (!lastNameIsValid) {
      return;
    } else if (!emailIsValid) {
      return;
    }

    console.log({
      name: nameInput,
      lastName: lastNameInput,
      emailInput: emailInput,
    });

    setNameInput("");
    setLastNameInput("");
    setEmailInput("");
  };

  return (
    <form onSubmit={submitFormHandeler}>
      <div className="control-group">
        <div className="form-control">
          <label>First Name</label>
          <input
            type={"text"}
            id="name"
            onChange={nameInputChange}
            value={nameInput}
          />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type={"text"}
            id="lastname"
            onChange={lastNameInputChange}
            value={lastNameInput}
          />
        </div>
      </div>
      <div className="form-control">
        <label>Email Adress</label>
        <input
          type={"email"}
          id="email"
          onChange={emailInputChange}
          value={emailInput}
        />
      </div>
      <div className="form-control">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
