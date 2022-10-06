import React, { useRef } from "react";

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandeler = (e) => {
    e.preventDefault();
    const enteredValues = taskInputRef.current.value;

    if (enteredValues.trim().length > 0) {
      props.onEnteredTask(enteredValues);
    }
  };

  return (
    <form>
      <input type="text" ref={taskInputRef} />
      <button>{props.Loading ? "Sending..." : "Add Text"}</button>
    </form>
  );
};

export default TaskForm;
