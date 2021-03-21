import React, { useMemo, useState } from 'react'

function MemoHooksEx() {
    const [counter1, setcounter1] = useState(0)
    const [counter2, setcounter2] = useState(0)

    const increment1=()=>{
        setcounter1(counter1+1)
    }
    const increment2=()=>{
        setcounter2(counter2+1)
    }
    const isEven= useMemo(() => {
        let i=0;
        while(i<2000000000)i++
        return counter1%2===0},
        [counter1])

    
    // const isEven=()=>{
    //     let i=0;
    //     while(i<2000000)i++
    //     return counter1%2===0
    // }

    return (
        <div>
            <div>
                <button onClick={increment1}>Count 1-{counter1}</button>   
                <span>{isEven?"even":'odd'}</span>
            </div>    
            <div>
                <button onClick={increment2}>Count 2-{counter2} </button>
            </div>   
        </div>
    )
}

export default MemoHooksEx

