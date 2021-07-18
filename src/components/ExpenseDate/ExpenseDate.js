import React from 'react';
import './ExpenseDate.css';

/**
 * @author Ravi Kumar
 * @since 16 July 2021
 * @description 
 * @returns 
 */
const ExpenseDate = props => {
    const ExpenseDate = new Date(props.date);
    // console.log(ExpenseDate);
    return (<div className="expense-date">
        <div className="expense-date-month">{ExpenseDate.toLocaleString('default', { month: 'long' })}</div>
        <div className="expense-date-year">{ExpenseDate.getUTCFullYear()}</div>
        <div className="expense-date-day">{ExpenseDate.getUTCDate()}</div>
    </div>)
}

export default ExpenseDate;