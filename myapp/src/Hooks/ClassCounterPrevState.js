import React, { Component } from 'react'

export class ClassCounterPrevState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increamentCount=()=>{
        this.setState(prevState=>{
            return {count :prevState.count+4}
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.increamentCount}>count - {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounterPrevState
