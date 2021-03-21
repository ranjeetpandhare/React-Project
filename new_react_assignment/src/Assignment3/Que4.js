// WAP to show use of event handle on button and show alert is
// “Welcome to TQPP” in functional component
import React from 'react'

function Que4() {
    function display(){
        alert("welcome to tqpp");
    }
    return (
        
        <div>
            <button onClick={display}>Clikc me</button>
        </div>
    )
}

export default Que4
