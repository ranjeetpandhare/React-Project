import axios from 'axios'
import React, { Component } from 'react'

 class PostForm extends Component {
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
    sendPost=(data)=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',data).then(respo=>{
        console.log(respo);
        // console.log(respo.data);
        // console.log(respo.config);
    })

    }
    // axios.post('https://jsonplaceholder.typicode.com/posts',data).then(respo=>{
    //     console.log(respo);
    // })
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state) 
        let data=this.state;
        this.sendPost(data);
       
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

export default PostForm
