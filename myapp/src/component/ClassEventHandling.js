import React, { Component } from 'react'

export class ClassEventHandling extends Component {
   add() {
        console.log("button click Class event accure")
    alert ("welcome jeet") 
    } 
    render() {
       
        return (
            <div>
                <button onClick={this.add}>Click me</button>
            </div>
        )
    }
}

export default ClassEventHandling
