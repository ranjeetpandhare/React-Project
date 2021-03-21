import React, { Component } from 'react'

 class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

    }
    counterIncrement=()=>{
        this.setState(prevState=>{return{count:prevState.count+1}})
    }
    
    render() {
        return (
            <div>
        <button onClick={this.counterIncrement}>{this.state.count}Times</button>
            </div>
        )
    }
}


export default ClickCounter
