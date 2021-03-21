import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Ansh"
        }
        console.log("LifeCycleB constructor Called")
    } 
       
   render() {
       console.log("LifeCycleB Render called");

       return (
           <div>
              <h1>LifeCycleB</h1> 
           </div>
       )
   }
   componentDidMount(){
       console.log("LifeCycleB ComponentDidMount Called");
   }
    static getDerivedStateFromProps(nextPorps,preState){
       console.log("LifeCycleB getDerivedStateFromPros Called");
       return null;

   } 
}

export default LifeCycleB
