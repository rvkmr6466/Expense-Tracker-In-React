import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../ExpenseForm/ExpenseForm.css';

const NewExpense = (props) => {

    return (
        <div className="expense-form">
            <ExpenseForm />
        </div>
    )
}

export default NewExpense;