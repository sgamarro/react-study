import ExpenseItemsList from "./components/Expenses/ExpenseItemsList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2022, 5, 1),
    },
    {
      id: "e4",
      title: "Car Insuranse",
      amount: 294.67,
      date: new Date(2022, 7, 1),
    },
  ];

  const addExpenseHandeler = (e) => {
    console.log(e);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <ExpenseItemsList items={expenses} />
    </div>
  );
}

export default App;
