import React, { Component } from 'react'
import Component_F from './Component_F'

export class Component_E extends Component {
    // 2
    static contextType=UserContext()
    render() {
        return (
            <div>
                <h1>Component E</h1>
                {/* {this.props.name}
                <Component_F name={this.props.name}/> */}
                Component_E context={this.context}
                <Component_F/>
            
            </div>
        )
    }
}

// Component_E.contextType=Usercontext;1
export default Component_E
