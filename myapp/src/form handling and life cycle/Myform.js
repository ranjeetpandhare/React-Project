import React, { Component } from 'react'

 class Myform extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:"",
              age:null,
              id:"",
              errormessage:""
         }
     }
     handler=(event)=>{
         console.log(event.target.value);
        //  this.setState({username:event.target.value});

        // to handled mutiple event at a time i text inpput 
        //ruls-name menation in aaray bracket and update the value then user {} bracket
        
        let num=event.target.name;
        let val=event.target.value;
        //this.setState({[num]:val});
        let err="";
        if(num==='age'){
            if(val!="" && !Number(val)){
                //alert("age must be number");
                err=<strong>Your mmust be a number</strong>

            }
        }
        this.setState({errormessage:err});
      this.setState({[num]:val});

     }
     agehandler=(event)=>{
         this.setState({age:event.target.value});
     }
     onSubmit=(event)=>{
        //  to hold the value from input text file form
         event.preventDefault();
         let age=this.state.age;
         if(!Number(age)){
             alert("age must be number...................");
         }
         else{

            alert(`your are submiting ${this.state.username} ans your age is ${this.state.age} and id is ${this.state.id}`)

         }
         
     }
     
    render() {
        let title='';
        if(this.state.username){
            title=<h1> hello {this.state.username}</h1>
        }
        else{
            title='';
        }
        return (
            <div>
                  {/* //form submit type using onsumbit on form tag. */}
                <form  onSubmit={this.onSubmit} >
                  
                  {/* <h1>Myform{this.state.username}</h1> */}
                  {title}
                  <label>Enter your name:</label>
                  <input type="Text" name="username" onChange={this.handler} value={this.state.username} required></input><br/>
                  <label>Enter your age</label>
                  {/* <input type="text" value={this.state.age} onChange={this.agehandler}></input> */}


                  <input type="text" name="age" value={this.state.age} onChange={this.agehandler} required></input><br/>
                  {this.state.errormessage}
                  <label>Enter your id</label>
                  <input type="text" name="id" value={this.state.id} onChange={this.handler} required></input><br/>


                  <input type="submit" /*onClick={this.onSubmit}*/></input><br/>
                  {/* <button onClick="button">submit</button> */}
                  
                </form>
            </div>
        )
    }
}

export default Myform
