import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()
    const goHome = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>Page Not Found</h1>
            <button onClick={goHome} >Go Home</button>
        </div>
    )
}

export default NotFound