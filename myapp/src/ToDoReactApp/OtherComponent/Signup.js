import React, { Component } from 'react';
import axios from "axios";
export class Signup extends Component {
    constructor(props) {
        super(props)
        //all input Data is set in state 
        this.state = {
            firstname: "",
            firstnameError: "",

            lastname: "",
            lastnameError: "",

            email: "",
            emailError: "",

            gender: '',
            genderError: "",

            date_of_birth: '',
            dateofbirthError: "",

            password: "",
            passwordError: "",

            cpassword: "",
            cpasswordError: "",

            currentDate: "",

            allUserDetails: []


        }
    }
    //common method for all inputs For change
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.validForm();
    }
    //This LifeCycle Method For Collecting Data for cheking input email is present or not
    componentWillMount = () => {
        axios.get('http://localhost:1337/user/register')
            .then(res => {
                this.setState({ allUserDetails: res.data });
            });
        var date = new Date().getDate();
        var month = new Date()
        this.setState({ currentDate: date });
    }
    // for age calculating  function
    calculate_age = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        return age_now;
    }
    //Validation For Inpute Methods
    validForm = () => {
        var isValid = true
        var pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
        if (this.state.firstname.length === 0) {
            this.setState({ firstnameError: "Firstname Should Not Be Blank" });
            isValid = false;
        }
        else if (this.state.firstname.length > 0) {
            this.setState({ firstnameError: "" });
            isValid = true;
        }
        if (this.state.lastname.length < 1) {
            this.setState({ lastnameError: "Lastname Should Not Be Blank" });
            isValid = false;
        }
        else if (this.state.lastname.length > 1) {
            this.setState({ lastnameError: "" });
            isValid = true;
        }
        if (this.state.gender === "") {
            this.setState({ genderError: "Gender Should Not Be Blank" });
            isValid = false;
        }
        else if (this.state.gender !== "") {
            this.setState({ genderError: "" });
            isValid = true;
        }
        if (this.state.date_of_birth === "") {
            this.setState({ dateofbirthError: "Date Of Birth Should Not Be Blank" });
            isValid = false;
        } else if (this.state.date_of_birth !== "") {
            this.setState({ dateofbirthError: "" });
            isValid = true;
        }
        if (parseInt(this.calculate_age(this.state.date_of_birth)) < 18) {
            this.setState({ dateofbirthError: "Age Should be Greater Than 18" });
            isValid = false;
        } else if (parseInt(this.calculate_age(this.state.date_of_birth)) >= 18) {
            this.setState({ dateofbirthError: "" });
            isValid = true;
        }
       

        if (!this.state.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            this.setState({ emailError: "Not Valid Email" });
            isValid = false;
        } else if (this.state.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            this.setState({ emailError: "" });
            isValid = true;
        }
        if (!this.state.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            this.setState({ passwordError: "Not Valid Password" });
            isValid = false;
        } else if (this.state.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            this.setState({ passwordError: "" });
            isValid = true;
        }
        if (this.state.password != this.state.cpassword) {
            this.setState({ passwordError: "Password And Confirm Password Not Match" })
            isValid = false;
        } else if (this.state.password != this.state.cpassword) {
            this.setState({ passwordError: "" })
            isValid = true;
        }
        return isValid;
    }

    register = () => {
        this.state.allUserDetails.map(user => {
            if (user.email !== this.state.email) {
                if (this.validForm()) {
                    //calling validform method if it send true then okk and gose to verifocation of email
                    alert("correct inputs");
                    const userDetails = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        email: this.state.email,
                        password: this.state.password,
                        cpassword: this.state.cpassword,
                        gender: this.state.gender,
                        date_of_birth: this.state.date_of_birth,
                        
                    }//save the input data 
                    axios.post(`http://localhost:1337/user/register`, {
                        method: 'POST',
                        body: userDetails,
                        headers: { 'Content-Type': 'application/json' }
                    }).then(Response=>console.log(Response))
                    alert("registered successfully..............")
            
                    this.setState({firstname:'',
                    lastname:'',
                    email:'',
                    password:'',
                    cpassword:'',
                    gender:"male",
                    date_of_birth:''})

                }
                else {
                    //if inpute are not correct
                   alert("not Correct inputs");
                }
            }
            else 
            {//if email is already prensent
                alert("Your Email is Already Register....Please Sign up with other Email");
            }
        })
    }

    render() {
        return (
            <div className="form-group container ">
                <h3>Registration Form</h3>
                <center>
                    <center className="border border-black m-5 col-md-6 border2">
                        <form >
                            <div className="col-md-10 ">

                                <label className="float-left m-3 black-text text-darken-2 s">First Name </label>
                                <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name" className="form-control"></input>
                                <pre style={{ color: "red" }}>{this.state.firstnameError}</pre>
                            </div>
                            <div className="col-md-10  ">
                                <label className=" float-left black-text text-darken-2 s">Last Name</label>
                                <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" className="form-control"></input>
                                <pre style={{ color: "red" }}>{this.state.lastnameError}</pre>
                            </div>
                            <div className="col-md-12  ">
                                <label className="s black-text text-darken-2">Gender : </label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="male" id="test1" name="gender" value="male" onChange={this.onChange} />&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="s black-text text-darken-2" htmlFor="test1">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="female" id="test2" name="gender" value="female" onChange={this.onChange} />&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="s black-text text-darken-2" htmlFor="test2">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" id="other" name="gender" id="test3"  value="other" onChange={this.onChange} />&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="s black-text text-darken-2" htmlFor="test3">Other</label>&nbsp;&nbsp;&nbsp;&nbsp; <br />
                                <pre style={{ color: "red" }}>{this.state.genderError}</pre>
                            </div>

                            <div className="col-md-10 ">
                                <label className="left black-text text-darken-2 s">Date Of Birth : </label>
                                <input type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.onChange} /><br />
                                <pre style={{ color: "red" }}>{this.state.dateofbirthError}</pre>
                            </div>

                            <div className="col-md-10 ">
                                <label className=" float-left black-text text-darken-2 s">Email </label>
                                <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Emailid" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
                                <pre style={{ color: "red" }}>{this.state.emailError}</pre>
                            </div>

                            <div className="col-md-10 ">
                                <label className=" float-left black-text text-darken-2 s">Password </label>
                                <input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" className="form-control"></input>
                                <pre style={{ color: "red" }}>{this.state.passwordError}</pre>
                            </div>

                            <div className="col-md-10 ">
                                <label className=" float-left black-text text-darken-2 s">Confirm Password </label>
                                <input type="password" name="cpassword" value={this.state.cpassword} onChange={this.onChange} placeholder="Confirm Password" className="form-control"></input>
                                <pre style={{ color: "red" }}>{this.state.cpasswordError}</pre>
                            </div>
                            <br />

                            <button type="button" className="btn btn-primary m-3" onClick={this.register}>Sign Up</button><br />

                        </form>
                    </center>
                </center>
            </div>
        )
    }
}

export default Signup
