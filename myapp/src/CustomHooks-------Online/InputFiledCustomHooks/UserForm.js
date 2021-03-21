import { reset } from 'nodemon'
import React from 'react'
import useUserForm from './useUserForm'

function UserForm() {
    
    const [firstname,bindfirstname,resetfirstname]= useUserForm('')
    const [lastname,bindlastname,resetlastname]= useUserForm('')

    const submitHandler=(e)=>{
        e.preventDefault();
        alert(`welocome ${firstname} ${lastname}`)
        resetfirstname()
        resetlastname()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <label>First Name</label>
                <input type="text" {...bindfirstname} />
                </div>

                <div>
                <label>Last Name</label>
                <input type="text" {...bindlastname} />
                </div>
                
                <button type="submit">Submit</button>
                
            </form>           
        </div>
    )
}

export default UserForm
