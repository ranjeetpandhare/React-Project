// WAP to generate following output using state, setstate and event
// binding -
// 1. Binding in render ()
// 2. Arrow function in render ()
// 3. Binding event handler in class constructor
// 4. Class property as arrow function
import React, { Component } from 'react'

export class Que6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"hello how are you ?"
        }
    }
    chnagemsg(){
        this.setState({msg:"i am fine"});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.chnagemsg.bind(this)}>Click me chnage message</button>
            </div>
        )
    }
}

export default Que6
