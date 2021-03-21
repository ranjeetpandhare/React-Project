import React, { Component } from 'react'

 class Que6_ClassConstr_bind extends Component {
     constructor() {
         super()
     
         this.state = {
              msg:"Hello how are you using const_bind"
         }
         this.changemsg=this.changemsg.bind(this);
     }
     changemsg(){
         this.setState({msg:"i am fine ..."});
     }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changemsg}>Clik me</button>
            </div>
        )
    }
}

export default Que6_ClassConstr_bind
