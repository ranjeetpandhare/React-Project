
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

 
function FetchSailsDataUsingAxios() {
    const [state, setstate] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:1337/companies').then(response=>{
            console.log(response);
            setstate(response.data)
        })
    },[]);
    return (
        <div >
           {state.map((value)=>(<div key ={value.id}>
              <h2> name : {value.name} </h2><br/>
               city : {value.city} <br/>
               address: {value.address}<br/>
               <hr/>
            </div>))} 
        </div>
    )
}
export default FetchSailsDataUsingAxios;