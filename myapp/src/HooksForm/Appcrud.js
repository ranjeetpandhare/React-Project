import React, { useState } from 'react'
import UserTable from './tables/UserTable.js'
import AddUserForm from './forms/AddUserForm.js';
import EditUserForm from './forms/EditUserForm';

function Appcrud() {
    const userData = [];

    //setting state
    const [users, setUsers] = useState(userData);
    const [flag, setFlag] = useState(false)
    const initialState={id:null,name:'',username:''}
    const [currentUser, setCurrentUser] = useState(initialState)
    
    //User CRUD operation
    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user])
    }
    const deleteUser=(id)=>{
        
        setUsers(users.filter((user)=>user.id!==id));
        alert("user deleted successfully!!!!!!!!");

    }
    const editUser=(user)=>{
        setFlag(true);
        setCurrentUser({id:user.id,name:user.name,username:user.username})

    }
    const upateUser=(id,updateUser)=>{
        setFlag(false);
        setUsers(users.map(user=>(user.id===id?updateUser:user)))

    }
    return (
        <div>
            <h1>CRUD App with Hooks</h1>
            <div>
                {flag?(<div>
                    <h2>Edit User</h2>
                    <EditUserForm currentUser={currentUser} upateUser={upateUser} flag={flag} setFlag={setFlag}/>
                    </div>):( 
                <div>
                    <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
                </div>)}
               
            </div>
            <div>
                <h2>View user</h2>
                <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />

            </div>

        </div>
    )
}

export default Appcrud
