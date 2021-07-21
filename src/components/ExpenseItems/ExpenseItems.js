import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import './ExpenseItem/ExpenseItem.css'

const ExpenseItems = (props) => {
    console.log("ExpenseItems:", props.addExpense);
    return (
        <div className="expense-items">
            <div className="expense-filter">
                <ExpenseFilter />
            </div>
            <div className="expense-item-list">
                {props.addExpense.map((expense, index) => {
                    return <ExpenseItem
                        id={index}
                        key={index}
                        title={expense.title}
                        expenseCost={expense.expenseCost}
                        dop={expense.dop}
                    />
                })}
            </div>
        </div>);
}

export default ExpenseItems;