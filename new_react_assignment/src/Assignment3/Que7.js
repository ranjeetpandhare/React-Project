// WAP to show Current Time and generate following output using state,
// event binding
import React, { Component } from 'react'

 class Que7 extends Component {
     constructor() {
         super()
     
         this.state = {
             date: new Date().toString()
              
         }
     }
     changedate(){
         this.setState({date:new Date().toString()});
     }
    render() {
        return (
            <div>
                <h1>{this.state.date}</h1>
                <button onClick={()=>this.changedate()}>change date</button>
            </div>
        )
    }
}

export default Que7
