import React, { Component } from 'react'
import InputExmChild from './InputExmChild';

export class FocusInputExmParent extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef();
    }
    handler=()=>{
        this.componentRef.current.focusInput();

    }
    render() {
        return (
            <div>
                <InputExmChild ref={this.componentRef}/>

                <button onClick={this.handler}>focus-input</button>
            </div>
        )
    }
}

export default FocusInputExmParent
