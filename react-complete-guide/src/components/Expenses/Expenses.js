import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter.js'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expenses) => (
            <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />
        ))
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    )
}
export default Expenses