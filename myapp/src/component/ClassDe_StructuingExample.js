import React, { Component } from 'react'

 class ClassDe_StructuingExample extends Component {
     constructor() {
         super()
     
         this.state = {
              msg:"jan batch......",
              msg1:"feb batch"
         }
     }

     //property destructuring with class
     
    // render() {
    //     console.log(this.props);
    //     const{name,age}=this.props;//destru with property
    //     return (
    //         <div>
    //             <h1>{this.props.name} and {this.props.age}</h1>
    //             <h1>{name} and {age}</h1>
                
    //         </div>
    //     )
    // }

//state destructuring with class
    render() {
        const{msg}=this.state;
        
        return (
            <div>
                <h1>{msg} and {this.state.msg1}</h1>
            </div>
        )
    }
}

export default ClassDe_StructuingExample
