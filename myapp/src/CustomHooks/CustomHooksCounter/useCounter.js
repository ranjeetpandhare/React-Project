// import { useState } from 'react'

// function useCounter(initialCount=0) {
//     const [count, setcount] = useState(initialCount)
//     const increment=()=>{
//         setcount(preCount=>preCount+1)
//     }
//     const decrement=()=>{
//         setcount(preCount=>preCount-1)
//     }
//     const reset=()=>{
//         setcount(initialCount)
//     }
//     return [count,increment,decrement,reset]
// }

// export default useCounter

//initialcount and parameter(value)
import { useState } from 'react'

function useCounter(initialCount=0,value) {
    const [count, setcount] = useState(initialCount)
    const increment=()=>{
        setcount(preCount=>preCount+value)
    }
    const decrement=()=>{
        setcount(preCount=>preCount-value)
    }
    const reset=()=>{
        setcount(initialCount)
    }
    return [count,increment,decrement,reset]
}

export default useCounter

