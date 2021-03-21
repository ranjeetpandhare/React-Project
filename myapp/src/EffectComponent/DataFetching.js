import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [err,setError]=useState("")
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            setPosts(res.data)

        })
        .catch(err=>{
            console.log(err);
            setError("error occcure..................")
        })
    },[])
    return (
        <div>
            <h1>list of posts</h1>
            <h1 style={{color:'red'}}>{err}</h1>
    {posts.length!==0 && posts.map(posts=><h1 key={posts.id}>{posts.title}</h1>)}
        </div>
    )
}

export default DataFetching
