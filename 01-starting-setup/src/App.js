import { useState } from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/UI/Header";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [{title: "Car", date: new Date(2022, 2, 28), amount: 3358.78, key: 0}, 
{title: "Housing Insurance", date: new Date(2019, 4, 13), amount: 25.33, key: 1}, 
{title: "Magical Man Services", date: new Date(2020, 5, 17), amount: 4499.99, key: 2},
{title: "Lose Dimes in Portrait Form", date: new Date(2020, 7, 6), amount: 15000000.23, key: 3}, 
{title: "Strange Occurancs", date: new Date(2022, 2, 28), amount: 0.02, key: 4}];

const App = () => {
  const[item, setItem] = useState(dummyExpenses);
  
  const objectOfItems = item => setItem((prevState) => [item, ...prevState]);

  return (
    <Card>
      <Header />
      <NewExpense onAddExpense={objectOfItems}/>
      <Expenses items={item}/>
    </Card>
  );
}

export default App;
