import UseBasic from "../hooks/use-basic";

const BasicForm = (props) => {
  const {
    input: nameInput,
    InputError: nameError,
    inputChange: nameInputChange,
    inputBlur: nameBlur,
    inputIsvalid: nameIsValid,
    reset: nameReset,
  } = UseBasic((value) => value !== "");

  const {
    input: lastNameInput,
    InputError: lastNameError,
    inputChange: lastNameInputChange,
    inputBlur: lastNameBlur,
    inputIsvalid: lastNameIsValid,
    reset: lastNameReset,
  } = UseBasic((value) => value !== "");

  const {
    input: emailInput,
    InputError: emailError,
    inputChange: emailInputChange,
    inputBlur: emailBlur,
    inputIsvalid: emailIsValid,
    reset: emailReset,
  } = UseBasic((value) => value.includes("@"));

  const submitFormHandeler = (e) => {
    e.preventDefault();

    console.log({
      name: nameInput,
      lastName: lastNameInput,
      emailInput: emailInput,
    });

    nameReset();
    lastNameReset();
    emailReset();
  };

  let allowSubmit = false;

  if (!nameIsValid || !lastNameIsValid || !emailIsValid) {
    allowSubmit = true;
  }

  const validateNameClass = nameError ? "form-control invalid" : "form-control";
  const validateLastnameClass = lastNameError
    ? "form-control invalid"
    : "form-control";
  const validateEmailClass = emailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandeler}>
      <div className="control-group">
        <div className={validateNameClass}>
          <label>First Name</label>
          <input
            type={"text"}
            id="name"
            onChange={nameInputChange}
            onBlur={nameBlur}
            value={nameInput}
          />
          {nameError && <p className="error-text">Enter a name</p>}
        </div>
        <div className={validateLastnameClass}>
          <label>Last Name</label>
          <input
            type={"text"}
            id="lastname"
            onChange={lastNameInputChange}
            onBlur={lastNameBlur}
            value={lastNameInput}
          />
          {lastNameError && <p className="error-text">Enter a last name</p>}
        </div>
      </div>
      <div className={validateEmailClass}>
        <label>Email Adress</label>
        <input
          type={"email"}
          id="email"
          onChange={emailInputChange}
          onBlur={emailBlur}
          value={emailInput}
        />
        {emailError && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={allowSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
