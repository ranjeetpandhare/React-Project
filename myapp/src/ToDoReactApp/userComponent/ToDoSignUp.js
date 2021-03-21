import Axios from 'axios'
import React, { Component } from 'react'


export class ToDoSignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'',
             lastname:'',
             email:'',
             password:'',
             cpassword:'',
             gender:"male",
             date_of_birth:''
        }
    }

    handler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    register=(event)=>{
        
        event.preventDefault()
        let object={firstname:this.state.firstname,
        lastname:this.state.lastname,
        email:this.state.email,
        password:this.state.password,
        gender:this.state.gender,
        date_of_birth:this.state.date_of_birth}


        Axios.post('http://localhost:1337/user/register',object).then(Response=>console.log(Response))
        alert("registered successfully..............")

        this.setState({firstname:'',
        lastname:'',
        email:'',
        password:'',
        cpassword:'',
        gender:"male",
        date_of_birth:''})
    }


    
    render() {
        return (
            <div>
                <form onSubmit={this.register}>
                    <label>First Name:</label><br/>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.handler} /><br/>

                    <label>Last Name:</label><br/>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.handler} /><br/>

                    <label>Email:</label><br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.handler} /><br/>

                    <label>Password:</label><br/>
                    <input type="text" name="password" value={this.state.password} onChange={this.handler} /><br/>

                    <label>Confirm Password:</label><br/>
                    <input type="text" name="cpassword" value={this.state.cpassword} onChange={this.handler} /><br/>
                    <label>Gender:</label><br/>
                    <select name="gender" onChange={this.handler}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br/>

                    <label>Date Of Birth</label><br/>
                    <input type="date" name="date_of_birth" onChange={this.handler}/><br/>

                    <button>Register</button>
                </form>
            


            </div>
        )
    }
}

export default ToDoSignUp