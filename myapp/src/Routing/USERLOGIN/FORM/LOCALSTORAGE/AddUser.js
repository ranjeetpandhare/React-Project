import React, { Component } from 'react'

 class AddUser extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              first_name:"",
              last_name:"",
              age:null,
              phone_number:"",
              date_of_birth:"",
              address:""
         }
        let agehandler=(event)=>{
            this.setState({age:event.target.value});
        }
        let onSubmit=(event)=>{
            event.preventDefault();
             let age=this.state.age;
             if(!Number(age)){
                 alert("age must be number...................");
             }
             else{
    
                alert(` ${this.state.first_name}  your form is successfully submited`);
    
             }
         }
          let myHandler=(event)=>{
          let num=event.target.name;
          let val=event.target.value;
          this.setState({[num]:val});
         }
        }
   
     
    render() {
        return (
            <div>
                <form >
                    <label>Enter First name:</label>
                    <input type="text" name="fname" onChange={this.myHandler} required></input><br/>
                    <label>Enter Last name:</label>
                    <input type="text" name="lname" onChange={this.myHandler}required></input><br/>
                    <label>Age:</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.myHandler}required></input><br/>
                    <label>Phone Number:</label>
                    <input type="text" name="pho" onChange={this.myHandler}required></input><br/>
                    <label>Date of Birth:</label>
                    <input type="text" name="dob" onChange={this.myHandler}required></input><br/>
                    <label>Addressr:</label>
                    <input type="text" name="add" onChange={this.myHandler}required></input><br/>
                    <button type="btn btn-primary" onClick={this.onSubmit}>Submit Form</button>
                    <button type="btn btn-denger">Cancel</button>
                </form>
            </div>
        )
   
    }
}

export default AddUser


