import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemsList.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseItemsList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const selectedExpenseFileter = (e) => {
    setFilteredYear(e);
    console.log(e);
  };
  return (
    <div className="expenses">
      <div>
        <ExpensesFilter
          FilteredDate={selectedExpenseFileter}
          filteredYear={filteredYear}
        />
      </div>

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default ExpenseItemsList;
