import React, { useEffect, useRef, useState } from 'react'
// auomatic timer incresed using hooks
function HooksTimer() {
    const [timer, settimer] = useState(0)
    const intervalRef = useRef()// 1]to create mutable object 
                                 // 2] .current value be change in .current
                                 //useEffect automatically render 
  
    useEffect(() => {
            intervalRef.current=setInterval(() => {
            settimer(timer=>timer+1)
        }, 2000);
        return()=>{
            clearInterval(intervalRef.current);
        }
    }, [])
    return (
        <div>
            Hooks timer-{timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop timer</button>
        </div>
    )
}

export default HooksTimer
