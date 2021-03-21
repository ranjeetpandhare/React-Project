import React, { Component } from 'react'
import FwdInputExfunctionCom from './FwdInputExfunctionCom';

export class FwdInputParentEx extends Component {
    constructor(props) {
        super(props)
    
       this.inputref=React.createRef();
    }
    handler=()=>{
        this.inputref.current.focus();
    }
    
    render() {
        return (
            <div>
                <FwdInputExfunctionCom ref={this.inputref}/>
                <button  onClick={this.handler}>focus input</button>
            </div>
        )
    }
}

export default FwdInputParentEx
