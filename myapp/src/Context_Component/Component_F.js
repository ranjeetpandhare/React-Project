import React from 'react'
import {UserContext} from '../App'

function Component_F() {
    return (
        <div>
            <h1> Component F</h1>
            <UserContext.Consumer>
                {user=>{return (<UserContext

                ) }}
            </UserContext.Consumer>
        </div>
    )
}

export default Component_F
