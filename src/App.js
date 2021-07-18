import React from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import './App.css';
import Expenses from './models/ExpenseModel';
import NewExpense from './components/ExpenseForm/NewExpense';
import './components/ExpenseForm/ExpenseForm.css'

const App = () => {
	/* const saveExpenseDataHandler = (enteredExpenseDate) => {
		const expenseData = { _id: Math.random().toString() , ...enteredExpenseDate};
		console.log(expenseData);
	} */
	return (
		<div className="card">
			{/* <NewExpense onSaveExpenseForm={saveExpenseDataHandler}/> */}
			<NewExpense/>
			{Expenses.map((expense, index) => {
				return <ExpenseItem
					id={index}
					key={index}
					title={expense.title}
					expenseCost={expense.expenseCost}
					dop={expense.dop}
				/>
			})}
		</div>
	);
}

export default App;
