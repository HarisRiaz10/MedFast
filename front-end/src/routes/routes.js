import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Login from '../pages/login/login'
import Search from '../pages/search/search'
import SignUp from '../pages/signup/signup'

export const AppRouter=()=>{
    const myRoutes=(
        <Switch>
            <Route exact path='/'>
            <Login/>
            </Route>
            <Route exact path='/signup'>
            <SignUp/>
            </Route>
            <Route exact path='/search'>
            <Search/>
            </Route>
        </Switch>
    )
    return(
        <div>
            <BrowserRouter>
            {myRoutes}
            </BrowserRouter>
        </div>
    )
}