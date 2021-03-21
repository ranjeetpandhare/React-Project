import React, { useContext } from 'react'
import { UserContext } from '../App'
import Component_F from './Component_F'

function Component_E() {
    const user = useContext(UserContext);
    const channel = useContext(channelContext);
    return (
        <div>
            <h1>Component E</h1>
            <h1>User value ={user} and channel value={channel}</h1>
            <Component_F/>
            
        </div>
    )
}

export default Component_E
