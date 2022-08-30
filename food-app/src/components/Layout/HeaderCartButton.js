import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      <span className={classes["cart-icon"]}>
        <AiOutlineShoppingCart />
      </span>
      <span>Your Cart:</span>
      <span> 3</span>
    </button>
  );
}

export default HeaderCartButton;
