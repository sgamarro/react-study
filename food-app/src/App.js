import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandeler = () => {
    setCartIsShown(true);
  };
  const closeCartHandeler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={closeCartHandeler} />}
      <Header onShow={showCarthandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
