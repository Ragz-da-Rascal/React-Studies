import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpensePrice from "./ExpensePrice";

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <ExpensePrice amount={props.amount} />
            </div>
        </Card>
    );
}

export default ExpenseItem;
