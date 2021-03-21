import React, { useState } from 'react'

 function HooksArrayRandomNumber() {
    const[item,setItem]= useState([])
    const [flag,setFlag]=useState(false)
    const addNumber=()=>{
        setItem([
            ...item,{
                id:item.length ,
                value:Math.floor(Math.random()*10)+1   
            }
        ]);
        setFlag({flag:true})
    
    }

        

    return (
        <div>
            <button onClick={addNumber}>Add Random Number</button>
           {(item.length!==0)? (item.map((item,i)=>(<h1 key={item.id}>{item.value}</h1>))):(<h1>Array is empty</h1>)}
        
           {flag?"heelo":"bye"}
           </div>
    )
    }

export default HooksArrayRandomNumber
