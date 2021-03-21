import React, { Component } from 'react'
import ApiService from '../Service/ApiService'

class NewPostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userid:'',
            title:'',
            body:''
             
        }
    }
    changeHandlar=(event)=>{
        this.setState({[event.target.name]:event.target.value})

    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state) 

        ApiService.fetchPost(this.state).then(responce=>{
            console.log(responce)
        })
}
    render() {
        const{userid,title,body}=this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userid" value={userid} onChange={this.changeHandlar} placeholder="Enter UserID"/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandlar} placeholder="Enter Title"/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandlar} placeholder=" Enter body"/>
                    </div>
                    <button type="submit">Send Data</button>
                </form>
            </div>
        )
    }
}

export default NewPostForm
