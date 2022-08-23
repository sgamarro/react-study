import { useState } from "react";
import ExpenseItemsList from "./components/Expenses/ExpenseItemsList";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 3, 1),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2022, 2, 1),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 5, 1),
  },
  {
    id: "e4",
    title: "Car Insuranse",
    amount: 294.67,
    date: new Date(2019, 7, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandeler = (e) => {
    setExpenses((prevExpenses) => {
      return [e, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <ExpenseItemsList items={expenses} />
    </div>
  );
}

export default App;
