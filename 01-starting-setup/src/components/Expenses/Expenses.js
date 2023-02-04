import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses() {
    const items = [{title: "Car", date: new Date(1977, 2, 28), amount: "3,358.78"}, 
                {title: "Housing Insurance", date: new Date(2012, 4, 13), amount: "25.33"}, 
                {title: "Magical Man Services", date: new Date(2006, 5, 17), amount: "44.99"},
                {title: "Lose Dimes in Portrait Form", date: new Date(2008, 7, 6), amount: "15,000,000.23"}, 
                {title: "Strange Occurancs", date: new Date(1977, 2, 28), amount: "0.02"}];
    return (
        <Card className="expenses">
            <ExpenseItem 
                title={items[0].title}
                amount={items[0].amount}
                date={items[0].date}
            />

            <ExpenseItem 
                title={items[1].title}
                amount={items[1].amount}
                date={items[1].date}
            />

            <ExpenseItem 
                title={items[2].title}
                amount={items[2].amount}
                date={items[2].date}
            />

            <ExpenseItem 
                title={items[3].title}
                amount={items[3].amount}
                date={items[3].date}
            />
        </Card>
    );
}