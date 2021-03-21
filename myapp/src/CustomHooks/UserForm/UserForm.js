// import React, { useState } from 'react'

// function UserForm() {
//     const [fname, setfname] = useState('')
//     const [lname, setlname] = useState('')
//    const submitHandler=(e)=>{
//         e.preventDefault();
//         alert(`hello ${fname} and ${lname}`)

//     }
//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <div>
//                     <label>Frist Name:</label>
//                     <input type='text' value={fname} onChange={(e)=>setfname(e.target.value)}></input>
//                 </div>
//                 <div>
//                     <label>Last Name:</label>
//                     <input type='text' value={lname} onChange={(e)=>setlname(e.target.value)}></input>
//                 </div>
//                 <div>
//                     <button >Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default UserForm



import React from 'react'
import useInputs from './useInputs'

function UserForm() {

    const [fname,bindfname,resetfname]=useInputs('')
    const [lname,bindlname,resetlname]=useInputs('')

   const submitHandler=(e)=>{
        e.preventDefault();
        alert(`hello ${fname} and ${lname}`)
        resetfname()
        resetlname()

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Frist Name:</label>
                    <input type='text' {...bindfname} ></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' {...bindlname} ></input>
                </div>
                <div>
                    <button >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm
