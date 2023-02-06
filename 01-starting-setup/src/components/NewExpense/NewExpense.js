import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            key: Math.floor(Math.random() * 1000).toString()
        }

        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <div className='header'>
                <h2>Set New Expense</h2>
            </div>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;