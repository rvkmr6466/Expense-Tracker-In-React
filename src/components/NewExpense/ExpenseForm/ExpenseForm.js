import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /**
     * @description Get Title change
     * @param {*} event 
     */
    const titleChangeHandler = event => {
        let title = event.target.value;
        setEnteredTitle(title);
    }


    /**
     * @description Get Amount change
     * @param {*} event 
     */
    const amountChangeHandler = event => {
        let amount = event.target.value;
        setEnteredAmount(amount);
    }


    /**
     * @description Get Date change
     * @param {*} event 
     */
    const dateChangeHandler = event => {
        let date = event.target.value;
        setEnteredDate(date);
    }


    /**
     * @description Get click change
     * @param {*} event 
     */
    const submitHandler = (event) => {
        const expenseData = {
            title: enteredTitle,
            expenseCost: enteredAmount,
            dop: enteredDate
        }
        console.log(expenseData);
        props.onSaveExpenseForm(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        event.preventDefault();
    }

    /**
     * 
     */
    const hideExpenseForm = () => {
        props.onCancelExpenseForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="grid">
                <label>Title:</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                    // required
                />
            </div>

            <div className="grid">
                <label>Amount:</label>
                <input
                    type="number"
                    value={enteredAmount}
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler}
                    // required
                />
            </div>

            <div className="grid">
                <label>Date:</label>
                <input
                    type="date"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                    // required
                />
            </div>

            <div className="expense-buttons">
                <button className="button" type="submit">Add Expense</button>
                <button className="button" onClick={hideExpenseForm}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm;