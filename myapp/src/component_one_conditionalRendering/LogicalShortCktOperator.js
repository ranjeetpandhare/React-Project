import React, { Component } from 'react'

 class LogicalShortCktOperator extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:false
         }
     }
     
    render() {
       return(this.state.isLoggedIn && <div><h1>hello</h1></div>)
    }
}

export default LogicalShortCktOperator
