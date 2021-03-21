import React, { Component } from 'react'

 class Loginone extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              password:''
         }
     }
     onChange=(event)=>{
         this.setState({[event.target.name]:event.target.value})
     }
     
     onSubmit=()=>{
         console.log(this.state.username)
         console.log(this.state.password)
         if(this.state.username == 'jeet' && this.state.password == 'jeet' ){
             console.log("sucess login")
         this.props.history.push('/contact')
         }
         else{
             alert("invalid username and password")
         }
     }
    render() {
        return (
            <div>
                <form>
                Username:<input type="text" name="username" placeholder="username" onChange={this.onChange}></input>  
                 Password:<input type="text" name="password" placeholder="password" onChange={this.onChange}></input>   
                 <button onClick={this.onSubmit}>Login</button>           
                </form>
            </div>
        )
    }
}

export default Loginone