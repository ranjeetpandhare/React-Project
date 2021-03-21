import React, { useState } from 'react'
import useCommonDoc from './useCommonDoc'

function DocTitle2() {
    const [count, setcount] = useState(0)
     
   useCommonDoc(count);
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Count-{count}</button>
        </div>
    )
}

export default DocTitle2
