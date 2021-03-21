// WAP to show use of key attribute for following example
// Example const fruits = ["Apple", "Banana", "Orange", "Mango"]
import React from 'react'

export default function Que3() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    return (
        <div>
            <h1>{fruits[0]}</h1>
            <h1>{fruits[1]}</h1>
            <h1>{fruits[2]}</h1>
            <h1>{fruits[3]}</h1>
        </div>
    )
}
