import './App.css';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItems from './components/ExpenseItems/ExpenseItems';

const App = () => {

	const addExpenseHandler = (expense) =>{
		console.log("In App.js");
		console.log(expense);
	}
	
	return (
		<div className="card">
			<NewExpense onAddExpenses={addExpenseHandler}/>
			<ExpenseItems />
		</div>
	);
}

export default App;
