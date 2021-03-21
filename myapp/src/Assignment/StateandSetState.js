import React, { Component } from 'react'

export class StateandSetState extends Component {
    constructor() {
        super()
        this.state = {
             msg:"welcome visitor"
        }    
    }
    changemsg=()=>{
        this.setState(
            {
                msg:"thank you for visiting "
            }
            );
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changemsg}>clickme</button>
            </div>
        )
    }
}

export default StateandSetState
