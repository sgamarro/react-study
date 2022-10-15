import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandeler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementHandeler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandeler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandeler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandeler}>Increment</button>
        <button onClick={increaseHandeler}>Increase by 5</button>

        <button onClick={decrementHandeler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandeler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
