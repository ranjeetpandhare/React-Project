import React, { useContext, useReducer } from 'react'
import {countContext} from './Calling'


function Component_D() {
    const countContext= useContext(countContext)
    return (
        <div>
            <h1>Component....... D</h1>
            <h1>{countContext.countState}</h1>
            <button onClick={()=>countContext.countDispatch('increment')}>+</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>-</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Component_D
