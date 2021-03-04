import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Counter = () => {
    const count = useSelector(state => (state.count))
    const dispatch = useDispatch()

    const addCounter= () => {
        dispatch({type: "INCREMENT"})
    }

    const minusCounter = () => {
        dispatch({type: "DECREMENT"})
    }
    return (
        <div>
            Counter: {count}
            <div>
            <button onClick={minusCounter}>-</button>
            <button onClick={addCounter}>+</button>
            </div>
        </div>
    )
}

export default Counter