import React, { useState } from 'react';
import './ExpenseForm/ExpenseForm.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import AddNewExpense from './AddNewExpense/AddNewExpense';

const NewExpense = (props) => {
    console.log("Props inside newexpense", props);

    const [newExpense, setNewExpense] = useState(false);

    /**
     * @description Add expense Data into an array
     * @param {*} enteredExpenseDate 
     */
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = { _id: Math.random().toString(), ...enteredExpenseDate };
        props.onAddExpenses(expenseData);
    }

    /**
     * @desc Hide Expense Form
     */
    const cancelExpenseFormHandler = () => {
        setNewExpense(false);
    }

    /**
     * @desc Show Expense Form
    */
    const AddNewExpenseFormHandler = () => {
        setNewExpense(true);
    }

    return (
        <div className="expense-form">
            {newExpense ? <ExpenseForm
                onSaveExpenseForm={saveExpenseDataHandler}
                onCancelExpenseForm={cancelExpenseFormHandler}
            /> : <AddNewExpense onAddNewExpense={AddNewExpenseFormHandler} />}
        </div>
    )
}

export default NewExpense;