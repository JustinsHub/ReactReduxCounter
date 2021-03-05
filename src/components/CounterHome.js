import React from 'react'
import {useHistory} from 'react-router-dom'
import "./Counter.css"

const CounterHome = () => {
    const history = useHistory()
    const reduxCounter = () => {
        history.push('/counter')
    }

    return (
        <div className="Counter">
        <h1>Welcome Home</h1>
        <button onClick={reduxCounter}>Redux Counter</button>
        <button>useState Counter</button>
        </div>
    )
}

export default CounterHome;