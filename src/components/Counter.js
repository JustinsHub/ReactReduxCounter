import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from '../action'

const Counter = () => {
    //get state from rootReducer {count:0} as the default and use it on UI
    const count = useSelector(state => (state.count))
    const dispatch = useDispatch()

    //dispatches action functions from action.js
    const addCounter = () => {
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