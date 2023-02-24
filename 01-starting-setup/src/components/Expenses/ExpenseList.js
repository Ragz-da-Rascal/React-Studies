import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
import ExpenseChart from './ExpensesChart';

const ExpenseList = (props) => {
    let expenseList;

    // Put expenses into a list
    if(props.items.length > 0){
        expenseList = props.items.map((expense) => {
            return <ExpenseItem 
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                />
        })
    } 

    // Filter expenses bases on year chosen
    expenseList = expenseList.filter(expense => {
        if(props.year == 'All') return expense;

        return expense.props.date.getFullYear() == props.year;
    })

    // Default for empty list of expenses 
    if(expenseList.length === 0){
        return <h3>No Expenses</h3>;
    }

    const expenseChartList = expenseList.map(el => {
        return el.props;
    })

    // Return list of expenses
    return (
        <div>
            <ExpenseChart
                expenses={expenseChartList}
            />
            <ul className='expense-list'>
                
                {expenseList}
            </ul>
        </div>
        )
}

export default ExpenseList;