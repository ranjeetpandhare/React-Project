import React from 'react'
import {Route,Link,NavLink,BrowserRouter as Router,Switch} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Loginone from './Loginone'
import PageNotFound from './PageNotFound'
import Users from './Users'


function App1() {
    return (
        <Router>

            
            <div style={{padding:10}}>
        <ul className="nav nav-tabs">
            <li>
                {/* <Link to="/contact">Contact</Link> */}
                <NavLink activeClassName="active" to='/login'>Login</NavLink>
            </li>
            <li>
                {/* <Link to="/">Home</Link> */}
                <NavLink exact activeClassName="active" to='/'>Home</NavLink>
            </li>
            <li>
                {/* <Link to="/users">User</Link> */}
                <NavLink activeClassName="active" to='/users'>User</NavLink>
            </li>
            <li>
                {/* <Link to="/contact">Contact</Link> */}
                <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
            </li>
           
        </ul>
        <Switch>
             <Route exact path= '/' component={Home}/>
            <Route path='/users' component={Users}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/' component={Loginone}/>
            <Route component={PageNotFound}/>
        </Switch>
            
            </div>
        </Router>
        
    )
}

export default App1
