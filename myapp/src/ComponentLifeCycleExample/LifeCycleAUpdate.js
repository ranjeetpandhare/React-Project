import React, { Component } from 'react'

export class LifecycleAUpdateUpdate extends Component {
    constructor(props) {
        super(props)
         this.state = {
             name:"Ansh"
        }
      //  console.log("LifecycleAUpdate constructor Called")
    }
    handler=()=>{
        this.setState({name:"TQPP"});
    }
     render() {
       console.log("LifecycleAUpdate Render called");

       return (
           <div>
             <div><h1>LifecycleAUpdate</h1></div>
            <h1>{this.state.name}</h1>  
              <button onClick={this.handler}>change value</button> 
           </div>
       )
   }
   /* componentDidMount(){
       console.log("LifecycleAUpdate ComponentDidMount Called");
   } */
    static getDerivedStateFromProps(nextPorps,preState){
       console.log("LifecycleAUpdate GetDerivedStateFromProps Called");
       return null;

   }
   shouldComponentUpdate(){
    console.log("LifecycleAUpdate shouldComponentUpdate Called");
       return true;
   }
   getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifecycleAUpdate getSnapshotBeforeUpdate Called");
       return null;
   }
   componentDidUpdate(){
    console.log("LifecycleAUpdate componentDidUpdate Called");
   }
}

export default LifecycleAUpdateUpdate
