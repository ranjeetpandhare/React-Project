import React, { useState } from 'react'

function HooksArray() {
    const[item,setItem]= useState([])
    // const addNumber=(e)={

    // }
    return (
        <div>
            <button >Add Random Number</button>
           {(item.length!==0)? (item.map((item,i)=>(<h1 key={i}>{item}</h1>))):(<h1>Array is empty</h1>)}
        </div>
    )
}


export default HooksArray
