import React, { useState } from 'react'

function HooksMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const logMousePosition=e=>{
        setX(e.clientX)
        setY(e.clientY)
        console.log("useEffect........")
    }
    return (
        <div>
            
        </div>
    )
}

export default HooksMouse
