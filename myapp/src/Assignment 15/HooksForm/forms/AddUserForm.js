import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialState={id:null,name:'',username:''}
    const [user, setUser] = useState(initialState);
    const handlerChange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
//setUser({...user,[event.target.name]:event.target.value})
    }
    const submitUser=(event)=>{
        event.preventDefault();
        if(!user.name|| !user.username) return
       props.addUser(user);
       setUser(initialState)
       alert("user added successfully!!!!!!!!!")
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
            <button className="btn btn-primary">Add new user</button>
        </form>
    )
}

export default AddUserForm
