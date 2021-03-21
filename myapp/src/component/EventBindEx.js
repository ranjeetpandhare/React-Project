//enevnt binding ways
import React, { Component } from 'react'

export class EventBindEx extends Component {
    constructor() {
        super()
    
        this.state = {
             msg:"how are you "
        }
        //this.changemsg=this.changemsg.bind(this);
    }
    // changemsg(){
    //     this.setState({msg:"i am ranjeet "});
    // }

    changemsg=()=>{
        this.setState({msg:"i am ranjeet "});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick={this.changemsg.bind(this)}>click</button> */}
                {/* 1]//binding in render method */}
                {/* <button onClick={()=>this.changemsg()}>click</button> */}
                {/*2] //using arrow function */}
                {/* <button onClick={this.changemsg}>click</button> */}
                {/* //3] usning class construcor event binding*/}
                <button onClick={()=>this.changemsg()}>click</button>
                {/* //4] class propert as arrow function */}
            </div>
        )
    }
}

export default EventBindEx
