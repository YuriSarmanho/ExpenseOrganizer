import React, { useState } from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title)
    const changeTitle = () =>{
        setTitle('updated!!')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem