import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const refInput = useRef(null)
    const refInput1 = useRef(null)
    useEffect(() => {
        refInput.current.focus();
    }, [])
    login=()=>{
        refInput.current.focus();
    }
    return (
        <div>
           Username: <input ref={refInput} type="text"/><br/>
           Password: <input ref={refInput1} type="text"/><br/>
           <button onClick={login}>Login</button>
        </div>
    )
}

export default FocusInput
