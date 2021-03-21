// WAP to show Toggle state and generate following output using state,
// event binding and ternary operator
import React, { Component } from 'react'

export class Que8 extends Component {
    constructor() {
        super()
    
        this.state = {
             isloggedin:true
        }
    }
    togglestate=()=>{
        this.setState(p=>({isloggedin:!p.isloggedin}));
    }
    
    render() {
        return(<div><button onClick={this.togglestate}>{this.state.isloggedin?'on':'off'}</button></div>)
    }

}

export default Que8
