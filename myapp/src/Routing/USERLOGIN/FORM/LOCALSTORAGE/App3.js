import React from 'react'
import {Route,NavLink,BrowserRouter as Router} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import AddUser from './AddUser'
import PageNotFound from './PageNotFound'



function App3() {
    return (
        <Router>
        <div style={{padding:10}}>
            <ul className="nav nav-tabs">
                <li>
                    <NavLink activeClassName="active" to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to='/adduser'>AddUser</NavLink>
                </li>
            </ul>  
            <switch>
                <Route exact path='/' component={Login}/>
                <Route  path='/home' component={Home}/>
                <Route path='/adduser' component={AddUser}/>
                <Route component={PageNotFound}/>
            </switch>       
        </div>
        </Router>
    )
}

export default App3

