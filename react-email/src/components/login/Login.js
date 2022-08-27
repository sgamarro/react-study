import React, { useState, useEffect, useReducer } from "react";
import Botton from "../UI/Botton/Botton";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
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

const passwordReducer = (state, action) => {
  if (action.type === "user_input") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "input-blur") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return {
    value: "",
    isValid: null,
  };
};

function Login(props) {
  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, displatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandeler = (e) => {
    dispatchEmail({ type: "user_input", val: e.target.value });
    // setFormIsValid(
    //   e.target.value.includes("@") && passwordState.isValid.trim().length > 6
    // );
  };

  const passwordChangeHandeler = (e) => {
    displatchPassword({ type: "user_input", val: e.target.value });
    setFormIsValid(emailState.isValid && e.target.value.trim().length > 6);
  };

  const validateEmailHandeler = () => {
    dispatchEmail({ type: "input-blur" });
  };

  const validatePasswordHandeler = () => {
    displatchPassword({ type: "input-blur" });
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={`${classes.login}`}>
      <form onSubmit={submitHandeler}>
        <Input
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
          label={"Email"}
          type={"email"}
          value={emailState.value}
          onChange={emailChangeHandeler}
          onBlur={validateEmailHandeler}
        />
        <Input
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
          label={"Password"}
          type={"password"}
          value={passwordState.value}
          onChange={passwordChangeHandeler}
          onBlur={validatePasswordHandeler}
        />

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
