import {useState} from 'react'

function useCounter(initialState=0) {

   const [counter, setcounter] = useState(initialState)

    const increment=()=>{
        setcounter(prevCounter=>prevCounter+1)
    }
    const decrement=()=>{
        setcounter(prevCounter=>prevCounter-1)
    }
    const reset=()=>{
        setcounter(initialState)
    }
    return [counter,increment,decrement,reset]
}

export default useCounter
