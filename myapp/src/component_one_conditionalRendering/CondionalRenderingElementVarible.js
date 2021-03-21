import React, { Component } from 'react'

 class CondionalRenderingElementVarible extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
    render() {
        let msg;
        if(this.state.isLoggedIn){
             msg=<h1>Welcome jeet</h1>
    }else{
              msg=<h1>Condion false </h1>    
    }
    return(<div>{msg}</div>)
        
}
}
export default CondionalRenderingElementVarible
