import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class ClickCounterUsingHOC extends Component {

    
    render() {
        return (
            <div>
        <button onClick={this.props.counterIncrement}>Clicked{this.props.count}Times</button>
            </div>
        )
    }
}
export default WithCounter(ClickCounterUsingHOC,2)
