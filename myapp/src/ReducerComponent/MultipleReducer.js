
import React, { useReducer } from 'react'


const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+2;
            case 'decrement':
                return state-2;
                  case 'reset':
                     return initialState;    
            default:
                return state
            
    }
}

const reducer3=(state,action)=>{
    switch(action){
        case 'increment':
            return state+10;
            case 'decrement':
                return state-10;
                  case 'reset':
                     return initialState;    
            default:
                return state
            
    }
}
function MultipleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    const [count3, dispatch3] = useReducer(reducer3, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch('increment')}>+</button>
            <button onClick={()=>dispatch('decrement')}>-</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

            <h1>{count2}</h1>
            <button onClick={()=>dispatch2('increment')}>+</button>
            <button onClick={()=>dispatch2('decrement')}>-</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>

            <h1>{count3}</h1>
            <button onClick={()=>dispatch3('increment')}>+</button>
            <button onClick={()=>dispatch3('decrement')}>-</button>
            <button onClick={()=>dispatch3('reset')}>Reset</button>



        </div>
    )
}

export default MultipleReducer

