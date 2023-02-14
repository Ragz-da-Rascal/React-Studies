import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[formSwitch, changeForm] = useState(false);
    const [userInput, setNewExpense] = useState({
        title: "",
        amount: "",
        date: new Date(),
        datePlaceholder: ""
    });

    const titleHandler = (event) => setNewExpense((prevState) => {
        return {...prevState, title: event.target.value}
    });

    const amountHandler = (event) => setNewExpense(prevState => {
        return {...prevState, amount: event.target.value.length > 0 ? +event.target.value : ""}
    });

    const dateHandler = (event) => setNewExpense(prevState => {
        const newDateChange = event.target.value.split("-");
        const newDate = new Date(newDateChange[0], newDateChange[1], newDateChange[2])

        return {...prevState, date: newDate, datePlaceholder: event.target.value};
    });

    const showAndHideForm = () => {
        changeForm(formSwitch ? false : true);
        console.log(formSwitch);
    }

    // Full User Input for Expenses Changes
    const expenseHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);

        setNewExpense(()=>{
            return {
                title: "",
                amount: "",
                date: "",
                datePlaceholder: ""
            }
        });
    }   

    return formSwitch ? (
                <form onSubmit= {expenseHandler}>
                    <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input onChange={titleHandler} value={userInput.title} type='text' placeholder="Expense..." required/>
                        </div>

                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input onChange={amountHandler} value={userInput.amount} min="0.01" step="0.01" type='number' placeholder="$0.00" required/>
                        </div>

                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input onChange={dateHandler} value={userInput.datePlaceholder} type='date' min="2019-01-01" max= "2026-12-31" required/>
                        </div>
                    </div>

                    <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>
                        <button onClick={showAndHideForm}>Cancel</button>
                    </div>
                    
                </form> 
            ) : (
            
            <div className='new-expense__actions'>
                <button onClick={showAndHideForm}> New Expense</button>
            </div>
    )
}

export default ExpenseForm;