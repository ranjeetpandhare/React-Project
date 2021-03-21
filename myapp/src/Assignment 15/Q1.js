import React, { useEffect, useState } from 'react'

function Q1() {
    const [count,setCount]=useState(0);
    var timer;
    const handler=()=>{
        clearInterval(timer)
    }

    useEffect(()=>{
       timer= setInterval(()=>setCount(count+1),1000);
    return ()=>{
        clearInterval(timer);
    }
}
    ,[count]);
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handler}>Stop</button>
        </div>
    )
}

export default Q1

