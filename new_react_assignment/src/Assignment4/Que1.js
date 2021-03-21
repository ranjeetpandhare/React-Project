// WAP to display list of fruits on browser using list rendering example
// const fruits = ["Apple", "Banana", "Orange", "Mango"]
import React from 'react'

export default function Que1() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    return (
        <div>
            {fruits.map(fruits=><h1>{fruits}</h1>)}
        </div>
    )
}
