import React, { useState, useEffect } from "react";

import NewTask from "./components/NewTask/NewTask";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [task, setTastk] = useState([]);

  const fetchTask = async (tastText) => {
    try {
      const response = await fetch(
        "https://hook-api-a7702-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();

      const loadedTask = [];

      for (const tasKey in data) {
        loadedTask.push({ id: tasKey, text: data[tasKey].text });
      }

      setTastk(loadedTask);
    } catch (err) {
      setError(err.message || "Something went wrong!!");
    }
    setIsLoading(true);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const taskHandeler = (task) => {
    setTastk((prevTask) => prevTask.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskHandeler} />
    </React.Fragment>
  );
}

export default App;
