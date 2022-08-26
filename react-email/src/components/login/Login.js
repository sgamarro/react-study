import React, { useState, useReducer } from "react";
import Botton from "../UI/Botton/Botton";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  if (action.type === "user_input") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "input-blur") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return {
    value: "",
    isValid: null,
  };
};

function Login(props) {
  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  //   useEffect(() => {
  //     const identifier = setTimeout(() => {
  //       setFormIsValid(
  //         enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //       );
  //     }, 500);

  //     return () => {
  //       clearTimeout(identifier);
  //     };
  //   }, [enteredEmail, enteredPassword]);

  const emailChangeHandeler = (e) => {
    dispatchEmail({ type: "user_input", val: e.target.value });
    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandeler = (e) => {
    setEnteredPassword(e.target.value);
    setFormIsValid(emailState.isValid && e.target.value.trim().length > 6);
  };

  const validateEmailHandeler = () => {
    dispatchEmail({ type: "input-blur" });
  };

  const validatePasswordHandeler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={`${classes.login}`}>
      <form onSubmit={submitHandeler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandeler}
            onBlur={validateEmailHandeler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandeler}
            onBlur={validatePasswordHandeler}
          />
        </div>
        <div className={classes.actions}>
          <Botton type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Botton>
        </div>
      </form>
    </Card>
  );
}

export default Login;
