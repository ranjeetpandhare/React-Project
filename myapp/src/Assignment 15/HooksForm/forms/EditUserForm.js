import React, { useState, useEffect } from 'react'

const EditUserForm = ({currentUser,upateUser,flag,setFlag}) => {
    const [user, setUser] = useState(currentUser)

    useEffect(() => {
        setUser(currentUser)
    },[currentUser,upateUser,flag,setFlag])
//
    const handlerChange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
    }
    const submitUser=(event)=>{
        event.preventDefault();
        if(!user.name|| !user.username) return
        upateUser(user.id,user)
        alert("User udate successfully!!!!");
    }

    return (
        <form onSubmit={submitUser}>
        <div>
            <label>Name:</label>
            <input type="text" name='name' value={user.name} onChange={handlerChange}/>
        </div>
        <div>
            <label>UserName:</label>
            <input type="text" name='username' value={user.username} onChange={handlerChange}/>
        </div>
        <button className="btn btn-success" >update user</button>
        <button className="btn btn-primary" onClick={()=>setFlag(!flag)}>Cancel</button>
    </form>
    )
}

export default EditUserForm
