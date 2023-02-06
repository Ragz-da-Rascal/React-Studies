const ExpensePrice = (props) => { 

    return (
        <div className="expense-item__price">${props.amount.toLocaleString()}</div>
    )
}

export default ExpensePrice;