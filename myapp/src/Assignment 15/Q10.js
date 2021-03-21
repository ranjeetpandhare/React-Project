import React, { useContext } from 'react'
import { userContext } from './CallingAssignment15'

function Q10() {
    const style1=useContext(userContext)
    console.log(style1)
    return (
        
        <div>
            <h1 style={{color:style1.blue}}>Hello {style1.blue}</h1>
        </div>
    )
}

export default Q10
