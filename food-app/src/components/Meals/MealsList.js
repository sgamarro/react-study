import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsList.module.css";
import CartContext from "../../context/context";

function MealsList(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandeler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.list} key={props.id}>
      <div className={classes.description}>
        <p>{props.name}</p>
        <span>{props.description}</span>
        <p>{props.price}</p>
      </div>
      <MealItemForm onAddToCart={addToCartHandeler} />
    </li>
  );
}

export default MealsList;
