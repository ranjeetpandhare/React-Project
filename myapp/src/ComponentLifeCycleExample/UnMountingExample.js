import React, { Component } from 'react'

export class UnMountingExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
    delHeader=()=>{
        this.setState({show:false});
    }
    
    render() {
        let myHeader;
        if(this.state.show){
            myHeader=<Child/>;
        }
        return (
            <div>
                {myHeader}
               <button onClick={this.delHeader}>Delete Header</button> 
            </div>
        )
    }
}

export default UnMountingExample
class Child extends Component{
    componentWillUnmount(){
        alert("header is unmount!!!!!");
        console.log("child component unmount!!!!!!!");
    }
    render(){
        return(<h1>Hello jan Batch</h1>);
    }
}
