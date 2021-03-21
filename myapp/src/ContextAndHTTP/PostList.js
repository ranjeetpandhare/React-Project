import React, { Component } from 'react'
import axios from 'axios'
import { red } from '@material-ui/core/colors'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:[],
             errormsg:''
        }
    }
    fetchPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(respo=>{
            console.log(respo);
            console.log(respo.data);
            console.log(respo.config);
            this.setState({post:respo.data});
        })

        .catch(error=>{
            console.log(error);
            this.setState({errormsg:'Error Occure during ajsx call'})
        })

    }
    componentDidMount(){
    this.fetchPost();
    }
    
    render() {
        const{errormsg,post}=this.state;
        return (
            <div>
                <h1>List of post</h1>
                {errormsg &&<div style={{color:'red'}}>{errormsg}</div>}
                {/* {this.state.errormsg} */}
                {
                    post.length?post.map(post=><div key={post.id}><h1>{post.id}</h1><div>{post.title}</div></div>):null
                }
            </div>
        )
    }
}

export default PostList
