
import React, { Component } from 'react'
import Axios from 'axios'

export class NewAxios extends Component {
    constructor(props) {
        super(props)
        this.state = {
             post:[],
           
        }
    }
    fetchPost(){
        Axios.get('https://reqres.in/api/users?page=2').then(respo=>{
            this.setState({post:respo.data});
        })
    }
    componentDidMount(){
    this.fetchPost();
    }
    
    render() {
        const{post}=this.state;
        return (
            <div>
                <h1>List of post</h1>
                {
                   post.map(post=><div key={post.id}>{post.id} {post.title}</div>)
                }
            </div>
        )
    }
}
export default NewAxios
