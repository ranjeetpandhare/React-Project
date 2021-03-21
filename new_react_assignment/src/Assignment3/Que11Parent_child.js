import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Que11Parent_child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myname:"ranjeet",
             city:'pune'
        }
    }
    displayparent=(city)=>{
       alert(`i am ${this.state.myname} and city is ${this.state.city}`);
    }
    
    render() {
        return (
            <div>
                <Childcomponent displayhandler={this.displayparent}/>
            </div>
        )
    }
}

export default Que11Parent_child
