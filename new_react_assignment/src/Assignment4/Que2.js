// WAP to take an array of numbers and double their values and display on browser
// example
// const numbers = [1, 2, 3, 4, 5] and output is 2, 4, 6, 8, 10
import React from 'react'

export default function Que2() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            {numbers.map(numbers=><h1>{numbers*2}</h1>)}
        </div>
    )
}
