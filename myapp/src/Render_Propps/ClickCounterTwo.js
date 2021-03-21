import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
   
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <h1>Count:{count}</h1>
                <button onClick={incrementCount}>Clicked:{count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
