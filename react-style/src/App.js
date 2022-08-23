import { useState } from "react";
import "./App.css";
import CouserGoalList from "./components/CourseGoals/CourseGoalList/CouserGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  const [courseGoal, setCourseGoal] = useState([
    { text: "Do all Exercises!", id: "g1" },
    { text: "Finish the course", id: "g2" },
  ]);

  const addGoalHandeler = (enteredText) => {
    setCourseGoal((prevGoal) => {
      const updatedGoals = [...prevGoal];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandeler = (goalId) => {
    setCourseGoal((prevGoal) => {
      const updatedGoals = prevGoal.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoal.length > 0) {
    content = (
      <CouserGoalList items={courseGoal} onDeleteItem={deleteItemHandeler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandeler} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
