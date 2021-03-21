import React, { useEffect, useState } from 'react'

function Q5() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2]=useState(0);

    const submit=()=>{
        setCounter1(counter1+1);
        
    }
    const submit1=()=>{
        setCounter2(counter2+1);
    }

    useEffect(() => {
        console.log(counter1)
        console.log(counter2)
    }, [counter2])
    return (
        <div>
           <h1>CounterOne - {counter1}</h1> 
           <button onClick={submit}>Increment</button>
    <h1>CounterTwo - {counter2}</h1>
    <button onClick={submit1}>Increment</button>
        </div>
    )
}

export default Q5
