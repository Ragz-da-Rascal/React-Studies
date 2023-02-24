import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, {useState} from "react";
import './Expenses.css';
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const [yearSelected, selectAYear] = useState(`All`);
    
    const yearChosen = (year) =>{
        selectAYear(year);
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={yearSelected} 
                    onYearSelected={yearChosen}
                />

               <ExpenseList 
                    year = {yearSelected}
                    items = {props.items}
               />
            </Card>
        </div>
    );
}

export default Expenses;