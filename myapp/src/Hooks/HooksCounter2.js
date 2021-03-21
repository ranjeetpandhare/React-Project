import React, { useState } from 'react'

function HooksCounter2() {
    const initialValue=2;
    const[count,setCount]=useState(initialValue);

    const incrementFive=()=>{
        //this.safe code 
        setCount(prevCount=()=>prevCount+5)

        // for (let i = 0; i < 5; i++) {//this is unsafe code
        //    setCount(count+1);
        // }
    }
    return (
        <>
            count:{count} <br/>
            <button onClick={()=>setCount(initialValue)}>Reset</button><br/>
            <button onClick={()=>setCount(count+1)}>Increment by one</button><br/>
            <button onClick={()=>setCount(count-1)}>decrement by one</button><br/>
            <button onClick={incrementFive}>Increment by five</button><br/>
        </>
    )
}

export default HooksCounter2
