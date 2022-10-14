import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    zipCode: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const zipCodeRef = useRef();
  const cityRef = useRef();

  const confirmHandeler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredZipCode = zipCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredZipCodeIsValid = isNotFiveChars(enteredZipCode);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      zipCode: enteredZipCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredZipCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      zipCode: enteredZipCode,
    });
  };

  return (
    <form onSubmit={confirmHandeler} className={classes.form}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="name">Name</label>
        <input type={"text"} id="name" ref={nameRef} />
        {!formInputValidity.name && (
          <p className={classes.invalid}>Please enter a valid name</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        } `}
      >
        <label htmlFor="street">Street</label>
        <input type={"text"} id="street" ref={streetRef} />
        {!formInputValidity.street && <p>Please fill this field</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.zipCode ? "" : classes.invalid
        } `}
      >
        <label htmlFor="postal">Zip code</label>
        <input type={"text"} id="postal" ref={zipCodeRef} />
        {!formInputValidity.zipCode && <p>Zip code must be 5 numbers long</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        } `}
      >
        <label htmlFor="city">City</label>
        <input type={"text"} id="city" ref={cityRef} />
        {!formInputValidity.name && <p>Please enter a city </p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
