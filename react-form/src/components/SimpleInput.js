import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== "";
  const enteredEmailValid = enteredEmail.includes("@");

  let formIsValid = false;

  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const nameInputChange = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputChange = (e) => {
    setEnteredEmail(e.target.value);
  };
  const nameInputBlur = () => {
    setEnteredNameTouched(true);
  };
  const emailInputBlur = () => {
    setEnteredEmailTouched(true);
  };
  const formSubmition = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      return;
    } else if (!enteredEmail) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmail && enteredEmailTouched;
  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClass = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmition}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type={"text"}
          id="name"
          onChange={nameInputChange}
          onBlur={nameInputBlur}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter your name</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label>Email</label>
        <input
          type={"text"}
          id="email"
          onChange={emailInputChange}
          onBlur={emailInputBlur}
          value={enteredEmail}
        />
        {emailInputIsValid && <p className="error-text">Enter a valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
