import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from '../action'

const Counter = () => {
    const count = useSelector(state => (state.count))
    const dispatch = useDispatch()

    const addCounter= () => {
        dispatch(increment())
    }

    const minusCounter = () => {
        dispatch(decrement())
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