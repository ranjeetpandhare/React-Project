import React, { Component } from 'react'

 class SampleForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              first_name:"",
         }
     }
     onSubmit=(event)=>{
         event.preventDefault();
         alert("form submited success....");

     }
     myhandler=(event)=>{
         this.setState({first_name:event.target.value})
     }
     
    render() {
        return (
            <div>
                <form>
                    <label>Enter Username:</label><br/>
                    <input type="text" onChange={this.myhandler}></input>
                    <input type="button">Submit</input> 
                </form>
            </div>
        )
    }
}

export default SampleForm
