import React from "react";
import Card from "../UI/Card";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Card>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
