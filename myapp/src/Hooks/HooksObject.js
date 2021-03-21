
import React,{useState} from 'react'
// hooks using object

function HooksObject() {
    const[name,setName]=useState({fname:'dasasda',lname:"sbgfb"})
    const Handler1=(e)=>{
        setName({...name,fname:e.target.value})
    }
    const Handler2=(e)=>{
        setName({...name,lname:e.target.value})
    }
    return (
        <div>
            {/* <h1>{name.fname} { name.lname}</h1> */}
           
            {/* <input type="text" placeholder="enter First name" value={name.fname} onChange={e=>{setName({...name,fname:e.target.value})}}/><br/>
            <input type="text" placeholder="enter Last name" value={name.lname} onChange={e=>{setName()}}/> */}

            <input type="text" placeholder="enter First name" value={name.fname} onChange={Handler1}/><br/>
            <input type="text" placeholder="enter Last name" value={name.lname} onChange={Handler2}/>
            
             
            <h1>first name is {name.fname}<br/> and last name is {name.lname}</h1>
            <h1>{JSON.stringify}</h1>
        </div>
    )
}

export default HooksObject
