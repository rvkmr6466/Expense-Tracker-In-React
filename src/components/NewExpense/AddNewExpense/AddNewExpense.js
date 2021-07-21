import React from 'react';
import './AddNewExpense.css';

const AddNewExpense = (props) => {
    console.log("Props inside addnewExpense", props)

    const onAddNewExpenseClick = () => {
        props.onAddNewExpense();
    }

    return (<div className="add-new-expense">
        <button className="button" type="button" onClick={onAddNewExpenseClick}>
            Add New Expense
        </button>
    </div>)
}

export default AddNewExpense;