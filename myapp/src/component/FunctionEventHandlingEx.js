import React from 'react'

function FunctionEventHandlingEx() {
    function add(){
        console.log("button click event accure")
        alert ("welcome ranjeet")
    }
    return (
        <div>
            <button onClick={add}>Click me</button>
        </div>
    )
}

export default FunctionEventHandlingEx
