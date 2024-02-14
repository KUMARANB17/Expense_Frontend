import { useEffect, useState } from "react"
import ContentItem from "./components/ContentItem"
import ExpenseItem from "./components/ExpenseItem"
import axios from "axios"

const App = () =>
{
  
  const[expenses, setExpenses] = useState([])

  useEffect(() => {
    axios.get('mongodb://localhost:27017')
    .then(res => {
      console.log(res.data)
      setExpenses(res.data)
    })
    .catch(err => console.log(err))
  },[])  

  const addExpenses = (title,amount) => {
    setExpenses([...expenses ,{title: title,amount: amount}])
  }
const deleteExpense =(id) => {
  setExpenses(expenses.filter((exp) => exp.id !==id))
}

let income = 0
let expense = 0
expenses.forEach((exp) => {
  if(exp.amount > 0) {
    income += exp.amount
  }
  else{
    expense -= exp.amount
  }
})

let balance = income-expense
  return (
    <>
    <div className="expensetitle">Expense Tracker</div>
    <ContentItem  addExpense = {addExpenses}/>
    <div>
      <div className="balance">Balance: {balance}</div>
      <div className="incomeex">
        <div className="income">
          <span className="title">Income</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span className="title">Expense</span>
          <span>{expense}</span>
        </div>
      </div>
    </div>
    {
      expenses.map((items) =>{
        return(
        <ExpenseItem {... items} deleteExpense={deleteExpense} />
        )
      })
    }
    </>
  )
}

export default App