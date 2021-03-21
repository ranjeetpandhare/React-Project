import React, { Component } from 'react'
import Component_E from './Component_E'

 class Component_C extends Component {
    render() {
        return (
            <div>
                <h1>component C</h1>
                {/* {this.props.name} */}
                {/* <Component_E name={this.props.name}/> */}
                {/* <UserConsumer>
                    {
                        username=>{return<div>Hello {username}</div>}
                    }
                </UserConsumer> */}
                <Component_C/>
                <Component_E/>
            </div>
        )
    }
}

export default Component_C
