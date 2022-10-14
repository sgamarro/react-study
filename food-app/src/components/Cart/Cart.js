import React, { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../context/context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandeler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandeler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandeler = () => {
    setIsCheckout(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmiting(true);
    await fetch(
      "https://hook-api-a7702-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandeler.bind(null, item.id)}
            onAdd={cartItemAddHandeler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandeler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      <div className={classes.list}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={submitOrder} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmitingContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Order placed! </p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitingContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
