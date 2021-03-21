import React, { Component } from 'react'

export class Que1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            age:""   
        }
    }
    handler=(event)=>{
        var nme=event.target.name;
        var val=event.tsraget.value;
        this.setState({[nme]:val})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.state}>
                <h1>hiii{this.state.name} your age is{this.state.age}</h1>
                <label>Enter your Name:</label>
                <input type="text" name="name" onChange={this.handler} value={this.state.name}></input>
                <label>Enter your Age:</label>
                <input type="text" name="name"onChange={this.handler} value={this.state.age}></input>
                </form>
            </div>
        )
    }
}

export default Que1
