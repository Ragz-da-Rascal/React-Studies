import ExpenseForm from './ExpenseForm';
import React from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
    const [count, setCounter] = React.useState(6);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        setCounter((prevState) => prevState + 1);

        const expenseData = {
            ...enteredExpenseData,
            key: count
        }

        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;