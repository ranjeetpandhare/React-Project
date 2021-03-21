import React from 'react'

const UserTable=() =>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ranjeet</td>
                    <td>Ranjeet99@gmail.com</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserTable
