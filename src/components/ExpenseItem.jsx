const ExpenseItem = (props) =>{
    const {id,title,amount,deleteExpense} = props
    const handleDelete = () => {
        deleteExpense(id)
    }
    return (
        <>
        <div className="expense-item-container">
        <div className={`outerbox ${amount > 0 ? 'positive' : 'negative'}`}>
            <div className="expense-title">{props.title}</div>
            <div className="expense-amount">{props.amount}</div>
            </div>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
        </>
    )
}

export default ExpenseItem

