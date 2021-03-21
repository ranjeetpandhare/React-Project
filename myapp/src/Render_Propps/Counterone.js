import React, { Component } from 'react'

export class Counterone extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.render(this.state.count,this.state.incrementCount)}</h1>
            </div>
        )
    }
}

export default Counterone
