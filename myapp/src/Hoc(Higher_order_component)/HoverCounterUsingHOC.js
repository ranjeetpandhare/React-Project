import React, { Component } from 'react'

export class HoverCounterUsingHOC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    counterIncrement=()=>{
        this.setState(prevState=>{return{count:prevState.count+1}})
    }
    
    render() {
        const{count}=this.state
                return (
                    <div>
               <h1 onMouseOver={this.counterIncrement}>clicked {count}</h1>
                    </div>
                )
            }
        }
export default (HoverCounterUsingHOC,5)
