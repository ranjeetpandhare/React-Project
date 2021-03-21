import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            email_status: "",
            flag: false

        }
    }
    isLoggedIn = () => {
        // event.preventDefault();
        Axios.post('http://localhost:1337/user/login', this.state).then((response) => {

            // this.state.email_status = response.data.data.email_status

            console.log(this.state.email_status)


        }).catch(err => console.log(err));
        //  alert("login not  successfull..............")

    }
    onSubmitHandler = () => {
        this.isLoggedIn();

        if (this.state.email_status === 'confirmed') {
            console.log("account confirmed")
            //this.state.flag=true;
        } else if (this.state.email_status === 'unconfirmed') {
            alert("please wait sometime user is not confirmed email")

        } else if (this.state.email_status === '') {
            alert("user is not registered ..please go to sign up page ")
        }
    }

    myChangehandlar = (event) => {

        let num = event.target.name;
        let val = event.target.value;
        this.setState({ [num]: val });
    }
    render() {
        const mystyle = {
            border: "2px solid black",
            backgroundColor: "#eaf5f8 ",
            width: "400px",
            height: "300px",
            marginTop: "100px",
            marginLeft: "445px",
            textAlign: "center",
        }


        // if(this.state.flag){
        //    <h1><ToDoTask/></h1>
        // }
        // else{
        //     retrun (
        //         <div></div>
        //     )
        // }
        return (
            //  {/* {this.state.flag &&<div><ToDoTask/></div>} */}
            <form >

                <div style={mystyle}>
                    <h1>Login Page</h1>

                    <div>
                        <span>
                            <i className="fas fa-user"> </i>
                        </span>

                        <input type='text' name='email' value={this.state.email} onChange={this.myChangehandlar} placeholder="email" required /><br /><br />
                    </div>
                    <div>
                        <span>
                            <i className="fas fa-key"> </i>
                        </span>
                        <input type='text' name='password' value={this.state.password} onChange={this.myChangehandlar} placeholder="Password" required /><br /><br />
                    </div>
                    <button onClick={this.onSubmitHandler} className="btn btn-primary">Submit</button>     <button className="btn btn-danger">Cancel</button>

                </div>


            </form>

        )
    }
}

export default Login
