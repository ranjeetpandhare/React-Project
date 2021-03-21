import React, { Component } from 'react'

export class IncrementCounter extends Component {
   
    
        state = {
           count:2
        }
    
    incrementValue(){
        this.setState({
            count:this.state.count+2
        });
        console.log(this.state.count);
    } 
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.incrementValue()}>Increment Value</button>  
                
            </div>
        )
    }
}

export default IncrementCounter
