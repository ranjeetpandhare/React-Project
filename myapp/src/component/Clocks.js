import React,{Component} from 'react'
export class Clocks extends Component{
    constructor(){
        super();
        this.state={currentdate:new Date().toString()};
    }
    myTimer(){
        this.setState({currentdate:new Date().toString()});
    }
    render(){
        return(
        <div>
            <h1>date={this.state.currentdate}</h1>
            <button onClick={()=>this.myTimer()}>clock-btn</button>
            </div>
            );
    }

}
export default Clocks;