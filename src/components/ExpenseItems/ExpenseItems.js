import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Expenses from './../../models/ExpenseModel';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';

const ExpenseItems = () => {
    return (
        <div className="expense-items">
            <div className="expense-filter">
                <ExpenseFilter />
            </div>
            <div className="expense-item">
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
        </div>)
}

export default ExpenseItems;