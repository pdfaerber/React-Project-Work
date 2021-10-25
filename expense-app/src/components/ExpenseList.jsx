import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './ExpenseItem.css';

function ExpenseList() {
  const expenses = [
    {
      id: "e1",
      title: "Cell Phone Bill",
      amount: 126.0,
      date: new Date(2021, 10, 10),
    },
    {
      id: "e2",
      title: "Con Ed Bill",
      amount: 115.52,
      date: new Date(2021, 10, 19),
    },
    {
      id: "e3",
      title: "Optimum Internet",
      amount: 84.0,
      date: new Date(2021, 10, 30),
    },
    {
      id: "e4",
      title: "National Grid Gas Bill",
      amount: 19.26,
      date: new Date(2021, 10, 25),
    },
  ];

  return (
    <Card className = "expenses">
      <h2>Expense App - Let's get it started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}
export default ExpenseList;
