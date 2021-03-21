import React, { useReducer } from 'react'

const initialState={firstcounter:0,secondCounter:10}
const reducer=(state,action)=>{ 
    switch(action.type){
        case 'Increment':
            return {...state,firstcounter:state.firstcounter+action.value}
            case 'Decrement':
                return {...state,firstcounter:state.firstcounter-action.value}
                case 'Increment2':
                    return {...state,secondCounter:state.secondCounter+action.value}
                    case 'Decrement2':
                    return {...state,secondCounter:state.secondCounter-action.value}
                
                    case 'Reset':
                    return initialState;
                default:
                    throw new Error();
    }
}
function Conter() {
    const [count, dispatch] = useReducer(reducer, initialState)

    const handlerIncrement=()=>{
        dispatch({type:'Increment',value:1})
        }
        
        const handlerDecrement=()=>{
            dispatch({type:'Decrement',value:1})
            }
            const handlerIncrement5=()=>{
                dispatch({type:'Increment',value:5})
                }
                const handlerDecrement5=()=>{
                    dispatch({type:'Decrement',value:5})
                    }
            const handlerReset=()=>{
                dispatch({type:'Reset'})
                }
    return (
        <div>
            <h1>{count.firstcounter}</h1>
            <button onClick={handlerIncrement}>Increment</button>
            <button onClick={handlerDecrement}>Decrement</button>
            <button onClick={handlerIncrement5}>Increment by 5</button>
            <button onClick={handlerDecrement5}>Decrement by 5</button>
            
            <h1>{count.secondCounter}</h1>
            <button onClick={()=>dispatch({type:'Increment2',value:2})}>Increment by 2</button>
            <button onClick={()=>dispatch({type:'Decrement2',value:2})}>Decrement by 2</button>
            <button onClick={handlerReset}>Reset</button>
        </div>
    )
}

export default Conter


// if(action.type=='Increment'){
        //     return {firstcounter:state.firstcounter+1}
        // }else if(action.type=='Decrement'){
        //     return {firstcounter:state.firstcounter-1}
    //}
