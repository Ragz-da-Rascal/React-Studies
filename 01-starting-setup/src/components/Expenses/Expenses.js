import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import React, {useState} from "react";
import './Expenses.css';

const Expenses = (props) => {
    const [yearSelected, selectAYear] = useState(`All`);
    
    const yearChosen = (year) =>{
        selectAYear(year);
        console.log(yearSelected);
    }

    console.log(props)
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter 
                    selected={yearSelected} 
                    onYearSelected={yearChosen}
                />

                {props.items.map(expense => {
                    if(yearSelected != `All`){
                        if(expense.date.getFullYear() != yearSelected) return;
                    }

                    return (
                        <ExpenseItem 
                            title={expense.title} 
                            date={expense.date} 
                            amount={expense.amount} 
                            key={expense.key}
                        />
                )})}
            </Card>
        </div>
    );
}

export default Expenses;