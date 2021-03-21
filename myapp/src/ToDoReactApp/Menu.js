import React from 'react';
import { NavLink,} from  "react-router-dom";
import './Menu.css'; 

const Menu=()=>{
  
    return (
        <>
        <NavLink  exact activeClassName="active_class"  to ="/"> Home </NavLink>
        <NavLink  exact activeClassName="active_class" to="/Login"> Login </NavLink>
        <NavLink  exact activeClassName="active_class" to="/Signup"> Signup </NavLink>
        <NavLink  exact activeClassName="active_class" to="/ToDoTask"> ToDoTask </NavLink>
        <hr/>
       
        </>
    )
};
export default Menu