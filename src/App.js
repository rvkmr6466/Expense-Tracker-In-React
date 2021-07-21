import './App.css';
import React, { useState } from 'react';
import Expenses from './models/ExpenseModel';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItems from './components/ExpenseItems/ExpenseItems';

const App = () => {

	const [addExpense, setAddExpense] = useState(Expenses);

	const addExpenseHandler = (expense) => {
		console.log("Expense", expense);
		setAddExpense(prev => {
			return [...prev, expense]
		})
	}


	return (
		<div className="card">
			<NewExpense onAddExpenses={addExpenseHandler} />
			<ExpenseItems addExpense={addExpense} />
		</div>
	);
}

export default App;
