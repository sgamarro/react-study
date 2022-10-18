import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";
let isIntial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.shoeNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );

      const response = await fetch(
        "https://hook-api-a7702-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data");
      }
      dispatch(
        uiActions.shoeNotification({
          status: "success",
          title: "Success...",
          message: "Sent card data",
        })
      );
    };

    if (isIntial) {
      isIntial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.shoeNotification({
          status: "error",
          title: "Error",
          message: "There was an Error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
