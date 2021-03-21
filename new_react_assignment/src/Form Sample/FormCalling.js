import React from 'react'
//import Que1 from '../Assignment5/Que1'
import Login from './Login'
import NewForm from './NewForm'
import aaa from '../Images/abc.jpg'

export default function FormCalling() {
    return (
        <div style={{backgroundImage:`url(${aaa})`}}>
            {/* <Login></Login> */}
           <NewForm></NewForm>
           
           {/* <Que1></Que1> */}
        </div> 


    )
}
