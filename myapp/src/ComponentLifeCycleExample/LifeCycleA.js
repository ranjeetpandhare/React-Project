import React, { Component } from 'react'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"ranjeet"
         }
         console.log("comp life cycle const. call")
     }
     static getDerivedStateFromProps(nextProps,preState){
         console.log("Life Cycle getDerived state from props call")

     }
     componentDidMount(){
         console.log("Life Cycle A component did mount call")
     }
     
    render() {
        console.log("lifecycleA Render call");
        return (
            <div>
                <h1>Lifecycle A</h1>
            </div>
        )
    }
}

export default LifeCycleA
