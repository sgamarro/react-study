import { useState } from "react";

import "./ExpenseItemsList.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function ExpenseItemsList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const selectedExpenseFileter = (e) => {
    setFilteredYear(e);
    console.log(e);
  };

  const filterExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        FilteredDate={selectedExpenseFileter}
        filteredYear={filteredYear}
      />
      <ExpenseChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </div>
  );
}

export default ExpenseItemsList;
