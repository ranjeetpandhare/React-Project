// without Using callback function
//age and salary incresed by one 

import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setage] = useState(20)
    const [salary, setsalary] = useState(10000)

   const incrementAge= useCallback(
        () => {
            setage(age+1)
        },
        [age],
    )
    const incrementSalary= useCallback(
        () => {
            setsalary(salary+1000)
        },
        [salary],
    )

    // const incrementAge=()=>{
    //     setage(age+1)
    // }
    // const incrementSalary=()=>{
    //     setsalary(salary+1000)
    // }
    return (
        <div>
            <Title/>
            <Count count={age} text="age"/>
            {/* //Button is not html button this is component */}
            <Button handlerClick={incrementAge}>Increment age</Button>

            <Count count={salary} text="age"/>
            <Button handlerClick={incrementSalary}>Increment salary</Button>
        </div>
    )
}

export default React.memo(ParentComponent)
