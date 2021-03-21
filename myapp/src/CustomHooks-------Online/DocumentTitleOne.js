import React ,{useState,useEffect}from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocumentTitleOne(){
    const[count,setCount]=useState(0);

    useDocumentTitle(count);

    return(
        <div>
            <h1>Custom hooks document title</h1>
            <button onClick={()=>setCount(count+1)}>Count -{count}</button>
        </div>
    )
}
export default DocumentTitleOne