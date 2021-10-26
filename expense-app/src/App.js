import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
// import "./App.css";




const App = ()=> {
  

  const addExpenseHandler = expense => {
    console.log("In ExpenseList.jsx");
    console.log(expense);

  };
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList />
     
    </div>
  );
}

export default App;
