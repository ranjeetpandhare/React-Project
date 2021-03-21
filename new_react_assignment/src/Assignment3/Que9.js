// WAP to show age is eligible for vote or not using if-else
import React, { Component } from 'react'

 class Que9 extends Component {
     constructor() {
         super()
     
         this.state = {
              validAge:true
         }
     }
     
    render() {
        if(this.state.validAge){
            return(
                <div>
                    <h1> age is valid</h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1> age is not valid</h1>
                </div>
            )
        }
    }
}

export default Que9
