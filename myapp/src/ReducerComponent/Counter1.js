import React, { useReducer } from 'react'
const initialState={firstcounter:0}
const reducer=(state,action)=>{
    switch(action.type){
        case 'Increment':
            return {...state,firstcounter:state.firstcounter+action.value}
            case 'Decrement':
                return {...state,firstcounter:state.firstcounter-action.value}
                case 'Increment2':
                    case 'Reset':
                    return initialState;
                default:
                    throw new Error();
    }
}
function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count.firstcounter}</h1>
            <button onClick={()=>dispatch({type:'Increment',value:2})}>Increment by 2</button>
            <button onClick={()=>dispatch({type:'Decrement',value:2})}>Decrement by 2</button>
        </div>
    )
}
export default Counter1
