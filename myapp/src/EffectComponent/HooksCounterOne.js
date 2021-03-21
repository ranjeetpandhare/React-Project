// import React, { useEffect, useState } from 'react'

// function HooksCounterOne() {
//     const [count, setcount] = useState(0);
//     useEffect(()=>{
//         document.title=` you clicked ${count} times`;
//     })
//     return (
//         <div>
//             <button onClick={()=>setcount(count+1)}>UseEffecet- clicked {count} times</button>
//         </div>
//     )
// }

// export default HooksCounterOne

import React, { useEffect, useState } from 'react'

function HooksCounterOne() {
    const [count, setcount] = useState(0);
    const [name,setName]=useEffect('');


    // conditional effect

    useEffect(()=>{
        console.log("Effect method called")
        document.title=` you clicked ${count} times`;
    },[count])

    // to provide dependency aaray [])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setcount(count+1)}>UseEffecet- clicked {count} times</button>
        </div>
    )
}

export default HooksCounterOne
