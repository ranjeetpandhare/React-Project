

import React from 'react';
import Menu from './Menu'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './commonComponent/Home';
import ToDoSignUp from './userComponent/ToDoSignUp';
import ToDoTask from './userComponent/ToDoTask';
import Login from './userComponent/Login'; 
//Main Component Of Excecution

function CallAllClass() {

   
  return (
   
    <div className="App">
      <h1>To Do Application</h1>
      <Router>
          <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route path="/Signup" component={ToDoSignUp}></Route>                    
                    <Route path="/ToDoTask" component={ToDoTask}></Route>
                </Switch>
            </Router>
    </div>
  );
}

export default CallAllClass;

