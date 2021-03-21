import Axios from 'axios';
import React, { useEffect, useState } from 'react'

function Q3() {
    const [state, setstate] = useState([]);

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response);
            setstate(response.data)
        })
    },[]);

    return (
        <div>
           {state.map((value)=>(<h1>{value.userId} title={value.title}</h1>))} 
        </div>
    )
}

export default Q3
