import React from 'react'
import useCounter from './useCounter';


function CounterOne() {
    const [counter,increment,decrement,reset]=useCounter(10)
    
    useCounter(counter)
    
    return (
        <div>
            <h1>Counter inc dec and reset custom hooks</h1>
            <h1> counter- {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}

export default CounterOne
