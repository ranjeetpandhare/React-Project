import React, { Component } from 'react'

export class InputExmChild extends Component {
    constructor(props) {
        super(props)
       
             this.inputref=React.createRef();
       
    }
    focusInput(){
        this.inputref.current.focus();
    }
    
    render() {
        return (
            <div>
                username:<input type="text" ref={this.inputref}></input><br/>
                password::<input type="text"></input><br/>
            </div>
        )
    }
}

export default InputExmChild
