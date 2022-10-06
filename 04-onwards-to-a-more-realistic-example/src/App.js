import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const trasnformTask = useCallback((taskObj) => {
    const LoadedTasks = [];
    for (const taskKey in taskObj) {
      LoadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(LoadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(trasnformTask);

  useEffect(() => {
    fetchTasks({
      url: "https://hook-api-a7702-default-rtdb.firebaseio.com/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
