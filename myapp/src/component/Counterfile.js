import React, { Component } from 'react'

export class Counterfile extends Component {
    // constructor() {
    //     super();
    
    //     this.state = {
    //          var date=new Date();
    //          this.state={date:date}
    //     }
    // }
   /*  incrementValue(){
        //this.state.count=this.state.count+1;
        this.setState({count:this.state.count+1});
        console.log(this.state.count);
    } */
    incrementValue(){
        
        this.setState({count:this.state.count+1},()=>{console.log("callback value",this.state.count)});
        console.log(this.state.count);
    
    }  
   /*  incrementValue(){
        
        this.setState((preState)=>({count:preState.count+1}));
        console.log(this.state.count);// sysnc
    } */ 
    incrementFive(){
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
    }


  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
          <button onClick={()=>this.incrementValue()}>Increment Value</button>  
        {/* <button onClick={()=>this.incrementFive()}>Increment Value</button> */}
      </div>
    )
  }
}

export default Counterfile
