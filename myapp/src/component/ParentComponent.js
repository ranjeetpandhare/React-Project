import React, { Component } from 'react'
import ChildComponent from './ChildComponent.JS';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"jeet"
        }

         //binding data from with in constructor
        //this.displayParent=this.displayParent.bind(this)
       

    }
    //data binding using fat arrow function
    displayParent=(city)=>{
        alert(`hello ${this.state.name } and city ${city`);

    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.name}</h1> */}
                <ChildComponent displayHandler={this.displayParent}/>
                
            </div>
        )
        }
    }
    
