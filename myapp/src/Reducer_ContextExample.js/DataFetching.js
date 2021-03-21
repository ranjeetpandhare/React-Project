import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';

const initialState={ 
    loading:true
    ,err:'',

    
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'fetch_sucess':
            return{loading:false,post:action,error:''}
            case 'fetch_error':
            return{loading:false,post:{},error:'somthing went to wrong ........'}
    }

}
function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{    
            dispatch({type:'fetch_sucess',value:res.data})
            console.log(res.data)
        })
        .catch(err=>{
            dispatch({type:'fetch_error'})           
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default DataFetching
