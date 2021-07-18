import React from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './ExpenseForm/ExpenseForm.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseDate) => {
		const expenseData = { _id: Math.random().toString() , ...enteredExpenseDate};
        props.onAddExpenses(expenseData);
	}

    return (
        <div className="expense-form">
            <ExpenseForm onSaveExpenseForm={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;