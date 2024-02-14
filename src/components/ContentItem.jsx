import { useState } from "react"

const ContentItem = (props) => {
    const{addExpense} = props

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [errors,setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title,amount)
        let err= {}

        if (title.length < 3) {
            err.title='Please enter valid Title and Amount'
        }
        if (!amount) {
            err.amount='Enter a valid amount'
        }
        if (Object.keys(err).length > 0) {
            setErrors({ ...err })
            return
        }
        addExpense(title,amount)
        setTitle('')
        setAmount(0)
    }
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
        setErrors({ ...errors, title: ''})
    }
    const handleAmountChange = (e) =>{
        setAmount(parseInt(e.target.value))
        setErrors({ ...errors, amount: ''})
    }
    return (
          <form className="exp-list" onSubmit={handleSubmit}>
            <div className="filltitle">
           <span><label>Title</label></span>
            <input type="text"  id="title" value={title} onChange={handleTitleChange}/>
            {errors.title ? <div className="error">{errors.title}</div> : null}
            </div>
            <div className="fillamount"> 
            <label>Amount</label>
            <input type="number" id="amount" value={amount} onChange={handleAmountChange}/>
            {errors.amount ? <div className="error">{errors.amount}</div> : null} 
            </div>
            <button className="submit"> AddTask</button>
          </form>
    )
  }

  export default ContentItem