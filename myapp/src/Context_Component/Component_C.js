import React from 'react'
import Component_E from './Component_E'
import { UserContext } from '../App'

function Component_C() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component C</h1>
            {user}
            <Component_E/>
        </div>
    )
}

export default Component_C
