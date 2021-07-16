import React from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import './App.css';
import Expenses from './models/ExpenseModel';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

const App = () => {
	// console.log(Expenses)
	return (
		<div className="card">
		<ExpenseForm />
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
