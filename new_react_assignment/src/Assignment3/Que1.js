// WAP to use Destructure in functional parameter itself for studRoll=101,
// studName=”Raj” mark=85
import React from 'react'

function Que1({studentName,mark}) {
    return (
        <div>
            <h1>hello {studentName} and mark is{mark}</h1>
        </div>
    )
}

export default Que1