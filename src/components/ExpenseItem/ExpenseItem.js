import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = () => {
    return <div className="expense-item">
        <ExpenseDate />
        <div>Pizza</div>
        <div><span>&#8377; </span>345</div>
    </div>
}

export default ExpenseItem;