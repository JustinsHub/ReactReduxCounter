import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CounterHome from './CounterHome'
import Counter from './Counter'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/counter"><Counter/></Route>
                <Route exact path="/"><CounterHome/></Route>
                <Route><NotFound/></Route>
            </Switch>
        </div>
    )
}

export default Routes