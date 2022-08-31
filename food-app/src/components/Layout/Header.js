import React from "react";
import classes from "./Header.module.css";
import mealImg from "../../assets/Le_Fantome.0.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="food" />
      </div>
    </React.Fragment>
  );
}

export default Header;
