import React, { useState } from 'react'

function LoginForm() {
    const [form,setValue]=useState({username:'',password:''})

    const onChange=(e)=>{
        setValue({...form,[e.target.name]:e.target.value})
    }
    const login=(e)=>{
        e.preventDefault();
        console.log(`${form.username} and ${form.password}`)
        alert(form.username);
    }
    return (
        <form onSubmit={login}>
            Username:<input value={form.username} name="username" onChange={onChange}/><br/>
            Password:<input value={form.password} name="password" onChange={onChange}/><br/>
            <button>Submit</button>
        </form>
    )
}

export default LoginForm
