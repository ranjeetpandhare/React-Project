import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class Component_F extends Component {
    render() {
        return (
            <div>
                <h1>component F</h1>
                {/* <h1>name is {this.props.name}</h1> */}
                {/* //to reacd the passing value from provider */}
                <UserConsumer>
                    {
                        username=>{return<div>Hello {username}</div>}
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default Component_F
