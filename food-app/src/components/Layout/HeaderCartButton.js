import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onShow} className={classes.button}>
      <span className={classes["cart-icon"]}>
        <AiOutlineShoppingCart />
      </span>
      <span>Your Cart:</span>
      <span>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
