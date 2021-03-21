import React, { Component } from 'react'
// import FormCalling from './Form Sample/FormCalling';
import 'bootstrap/dist/css/bootstrap.min.css';
 class Login extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:"",
              password:"",
         }
     }
     onSubmitHandler=(event)=>{
        const rem=localStorage.getItem('username')==='true';
        const user=rem ? localStorage.getItem(this.state.username):'';
     }
    
     myChangehandlar=(event)=>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]:val});
    }     
    render() {
        const mystyle={
            border: "2px solid black",
            backgroundColor:"#eaf5f8 ",
            width: "400px",
            height: "300px",
           marginTop: "100px", 
           marginLeft: "445px",
           textAlign: "center",
    }
        return (
        <form onSubmit={this.onSubmitHandler}>
            
            <div style={mystyle}>
                <h1>Login Page</h1>
                <div>
                    <span>
                        <i className="fas fa-user"> </i>
                    </span>
               
                <input type='text' name='username' value={this.state.username} onChange={this.myChangehandlar} placeholder="UserName" required/><br/><br/>
                </div>
                <div> 
                    <span>
                        <i className="fas fa-key"> </i>
                    </span>
                <input type='text' name='password' value={this.state.password} onChange={this.myChangehandlar} placeholder="Password" required/><br/><br/>
                </div>
                <button className="btn btn-primary">Submit</button>     <button className="btn btn-danger">Cancel</button>   
                
            </div>
            {/* <div>
                <FormCalling></FormCalling>
            </div> */}

        </form>
        
        )
    }
}

export default Login
