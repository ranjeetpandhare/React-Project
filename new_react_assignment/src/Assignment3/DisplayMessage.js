import React from 'react'

function DisplayMessage(props) {
    if(props.isLoggedIn)
    return <h1>Welcome User</h1>
   
    else
        return <h1>Please Login</h1>
    
}

export default DisplayMessage
