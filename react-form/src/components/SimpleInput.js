import UseInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameInputHasError,
    valueInputChange,
    inputBlur,
    reset: resetNameInput,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHAsError,
    valueInputChange: emailChange,
    inputBlur: emailBlur,
    reset: resetEmail,
  } = UseInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmition = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      return;
    } else if (!enteredEmail) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
    resetEmail();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClass = emailInputHAsError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmition}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type={"text"}
          id="name"
          onChange={valueInputChange}
          onBlur={inputBlur}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Please enter your name</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label>Email</label>
        <input
          type={"email"}
          id="email"
          onChange={emailChange}
          onBlur={emailBlur}
          value={enteredEmail}
        />
        {emailInputHAsError && (
          <p className="error-text">Enter a valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
