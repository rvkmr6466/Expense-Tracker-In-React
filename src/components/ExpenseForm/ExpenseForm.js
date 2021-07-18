import React, { useState } from 'react';
import '../ExpenseForm/ExpenseForm.css';

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
            amount: enteredAmount,
            date: enteredDate
        }
        // props.onSaveExpenseForm(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        event.preventDefault();
        console.log(expenseData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={enteredTitle}
                    placeholder="Expense"
                    onChange={titleChangeHandler}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={enteredAmount}
                    min="0.01"
                    step="0.01"
                    placeholder="Amount"
                    onChange={amountChangeHandler}
                    required
                />
            </div>

            <label>Date:</label>
            <input
                type="date"
                value={enteredDate}
                placeholder="Date"
                onChange={dateChangeHandler}
                required
            />

            <button className="button" type="submit">Add Expense</button>
        </form>
    )

}

export default ExpenseForm;