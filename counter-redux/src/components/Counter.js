import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandeler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandeler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandeler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandeler = () => {
    dispatch(counterActions.decrement());
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
