import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate/ExpenseDate';

const ExpenseItem = props => {

    return <div className="expense-item">
        <ExpenseDate date={props.dop}/>
        <div className="expense-item-content">
            <div className="expense-item-title">{props.title}</div>
            <div className="expense-item-cost"><span>&#8377; </span>{props.expenseCost}</div>
        </div>
    </div>
}

export default ExpenseItem;