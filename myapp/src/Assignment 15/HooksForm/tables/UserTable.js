import React from 'react'

const UserTable = ({users,deleteUser,editUser}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length>0?(users.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                <td>{user.username}</td>
                    <td>
                        <button className="btn btn-success" onClick={()=>editUser(user)}>edit</button>
                        <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                ))):(<tr><td colSpan={3}>No users</td></tr>)}
                
            </tbody>
        </table>
    )
}

export default UserTable
