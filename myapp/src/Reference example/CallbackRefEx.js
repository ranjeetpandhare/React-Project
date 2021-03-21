import React, { Component } from 'react'

export class CallbackRefEx extends Component {
    constructor(props) {
        super(props)
        this.cbref=null;
        this.setCbRef=ele=>{this.cbref=ele}
    }
    componentDidMount(){
        if(this.cbref){
            this.cbref.focus();
        }
    }
    handler=()=>{
        alert(this.cbref.value);
    }
    
    render() {
        return (
            <div>
               Username: <input ref={this.setCbRef}></input>
               password: <input></input>
               <button onClick={this.handler}>Login</button>
            </div>
        )
    }
}

export default CallbackRefEx
