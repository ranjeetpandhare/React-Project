import Axios from 'axios'
import React, { useEffect, useState } from 'react'

function SinglePostFetch() {
    //get perticular id-1 data
    const [id, setid] = useState([])

    //get the data and store from object and display window
    const [post, setPost] = useState({})

    //to set the error message during axios url accoure
    const [err,setError]=useState("")

    //to set the button 
    const [btnId, setbtnId] = useState(1)

    //call method 
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)

        })
        //to handled the error
        .catch(err=>{
            console.log(err);

            //to set the user defined error
            setError("error occcure..................")
        })
    },[btnId])//  ,[id] dependent id add and  add dependency because onle once record occure will be get this dependency
    
    const handleClick=()=>{
        setbtnId(id)

    }
    return (
        <div>
            <h1>list of posts</h1>
            <h1 style={{color:'red'}}>{err}</h1>
            <h1> {post.title} </h1>
            <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
            <button onClick={handleClick}>Fetch Data</button>
        </div>
    )
}

export default SinglePostFetch
