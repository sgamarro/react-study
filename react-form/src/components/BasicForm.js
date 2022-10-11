import React, { useState } from "react";

const BasicForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [nameOnFocus, setNameOnFocus] = useState(false);
  const [lastNameOnFocus, setLastNameOnFocus] = useState(false);
  const [emailOnFocus, setEmailOnFocus] = useState(false);

  const nameIsValid = nameInput !== "";
  const lastNameIsValid = lastNameInput !== "";
  const emailIsValid = emailInput.includes("@");

  const nameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  const nameBlur = () => {
    setNameOnFocus(true);
  };

  const lastNameInputChange = (e) => {
    setLastNameInput(e.target.value);
  };

  const lastNameBlur = () => {
    setLastNameOnFocus(true);
  };

  const emailInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const emailBlur = () => {
    setEmailOnFocus(true);
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
    setEmailOnFocus(false);
    setNameOnFocus(false);
    setLastNameOnFocus(false);
  };

  const nameNotValid = !nameIsValid && nameOnFocus;
  const lastNameNotValid = !lastNameIsValid && lastNameOnFocus;
  const emailNotValid = !emailIsValid && emailOnFocus;

  let allowSubmit = true;

  if (!nameIsValid && !lastNameNotValid && !emailNotValid) {
    allowSubmit = true;
  }

  return (
    <form onSubmit={submitFormHandeler}>
      <div className="control-group">
        <div className="form-control">
          <label>First Name</label>
          <input
            type={"text"}
            id="name"
            onChange={nameInputChange}
            onBlur={nameBlur}
            value={nameInput}
          />
          {nameNotValid && <p>Enter a name</p>}
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type={"text"}
            id="lastname"
            onChange={lastNameInputChange}
            onBlur={lastNameBlur}
            value={lastNameInput}
          />
          {lastNameNotValid && <p>Enter a last name</p>}
        </div>
      </div>
      <div className="form-control">
        <label>Email Adress</label>
        <input
          type={"email"}
          id="email"
          onChange={emailInputChange}
          onBlur={emailBlur}
          value={emailInput}
        />
        {emailNotValid && <p>Enter an Email</p>}
      </div>
      <div className="form-control">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
