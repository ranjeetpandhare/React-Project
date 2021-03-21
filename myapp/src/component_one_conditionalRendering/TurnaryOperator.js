import React, { Component } from 'react'

 class TurnaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return (this.state.isLoggedIn)?<div><h1>jeet</h1></div>:<div><h1>flase</h1></div>
    }
}

export default TurnaryOperator
