import React, { useState } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const enterTaskHandeler = async (tastText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://custom-hooks-9e269-default-rtdb.firebaseio.com/task.json",
        {
          method: "POST",
          body: JSON.stringify({ text: tastText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();

      const generateId = data.name;
      const createTask = { id: generateId, text: tastText };
      props.onAddTask(createTask);
    } catch (err) {
      setError(err.message || "Something went wrong!!");
    }
    setIsLoading(false);
  };
  return (
    <Section>
      <TaskForm onEnteredTask={enterTaskHandeler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
