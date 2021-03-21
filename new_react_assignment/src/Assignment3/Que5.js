// WAP to show use of event handle on button and show alert is “Hello
// react ” in class component
import React, { Component } from 'react'

 class Que5 extends Component {
     display(){
         alert("hello react");
     }
    render() {
        return (
            <div>
                <button onClick={this.display}>Click me</button>
            </div>
        )
    }
}

export default Que5
