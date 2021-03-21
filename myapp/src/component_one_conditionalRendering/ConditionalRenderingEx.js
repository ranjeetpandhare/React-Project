import React, { Component } from 'react'

 class ConditionalRenderingEx extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {
        if(this.state.isLoggedIn){
            return (
            <div>
                <h1>Welcome ranjeet</h1>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Condion false </h1>
            </div>
        )
    }
        
    }
}

export default ConditionalRenderingEx
