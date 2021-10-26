import React, {useState} from "react";


import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //hooks must only be called inside component functions
  const [title, setTitle] = useState(props.title);//always returns an array with 2 elements

  //function that changes the title of our expense item
  

  const clickHandler = () => {
    setTitle('Updated!!!');
    console.log('Expense Item being evaluated by React');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update Title</button>
    </Card>
  );
};
export default ExpenseItem;
