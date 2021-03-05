import {INCREMENT, DECREMENT} from './actionTypes'

//helper functions to provide reducer action dispatches. (Reduce code)
const increment = () => {
    return {type: INCREMENT}
}

const decrement = () => {
    return {type: DECREMENT}
}

export {increment, decrement}