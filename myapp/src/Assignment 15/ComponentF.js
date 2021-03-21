import React, { useContext } from 'react'
import { userContext } from './CallingAssignment15';
import { ChannelContext } from './CallingAssignment15';


function ComponentF() {
    const user=useContext(userContext);
    const channel=useContext(ChannelContext);
    return (
        <div>
            <h1>ComponentF</h1>
            <div>user context value= {user} , channel context value ={channel}</div>
        </div>
    )
}

export default ComponentF
