import React, { Component } from 'react'

export class Que6_ArrowFunction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"hello how are you arroew function ?"
        }
    }
    changemsg(){
        this.setState({msg:"i am fine"});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changemsg()}>clikc me </button>
            </div>
        )
    }
}

export default Que6_ArrowFunction
