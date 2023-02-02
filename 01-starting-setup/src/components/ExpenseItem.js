import "./ExpenseItem.css";

function ExpenseItem () {
    const expenseDate = new Date(2023, 3, 28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = "256.56";

    return (
        <div className="expense-item">
            <h2>{expenseTitle}</h2>

            <div className="expense-item__description">
                <p>{expenseDate}</p>
                <p className="expense-item__price">{expenseAmount}</p>
            </div>
        </div>
    );
}

export default ExpenseItem;
