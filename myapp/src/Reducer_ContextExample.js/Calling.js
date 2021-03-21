import React, { useReducer } from 'react'
// import Component_A from './Component_A'
// import Component_B from './Component_B'
// import Component_C from './Component_C'
import DataFetching from './DataFetching'


//to maintain global data
const initialState=0

const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
            case 'decrement':
                return state-1;
                  case 'reset':
                     return initialState;    
            default:
                return state
            
    }
}

export const countContext=React.createContext();
function Calling() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {/* <countContext.Provider value={{countState:count,countDispatch:dispatch}}>
            <Component_A/><hr/>
            <Component_B/><hr/>
            <Component_C/><hr/>
            </countContext.Provider> */}


            <DataFetching/>
            
        </div>
    )
}

export default Calling
