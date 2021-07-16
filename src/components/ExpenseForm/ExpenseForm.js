import React from 'react';
import '../ExpenseForm/ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <div className="expense-form">
            <form>
                <div>
                    <label>Title:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="text" />
                </div>

                <div>
                <label>Date:</label>
                <input type="date" />
                </div>

                <button class="button" type="submit">Add Expense</button>
            </form>
        </div>
    )

}

export default ExpenseForm;