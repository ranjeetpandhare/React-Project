import React, { Component } from 'react'

class QUe6ClasspropertArroew extends Component {
    constructor() {
        super()
    
        this.state = {
             msg:"hello how are you using in class propert using in arrow function"
        }
    }
    changemsg=()=>{
        this.setState({msg:"i am fine"});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changemsg}>click me</button>
            </div>
        )
    }
}

export default QUe6ClasspropertArroew
