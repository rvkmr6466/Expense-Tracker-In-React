import React from 'react';

const ExpenseDate = () => {
    const ExpenseDate = new Date().toLocaleDateString();
    return <div>
        {ExpenseDate}
    </div>
}

export default ExpenseDate;