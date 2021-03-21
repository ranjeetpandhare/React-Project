import React from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import Counterone from './Counterone'
import HoverCounter from './HoverCounter'
import User from './User'

function CallingRenderAsProps() {
    return (
        <div>
            <User 
            // name="jeet"
            // obj={{name:'ranjeet'}} 
            // name={['jay','jeet']}
            //displayname={true}
            //displayname={false}
            // age={10001}
            // name={()=>'jan batch'}


            // render={(a,b)=>a+b}
            />
            <Counterone 
            render={(count,incrementCount)=>
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>}>
            </Counterone>

            <Counterone render={(count,incrementCount)=><HoverCounter count={count} incrementCount={incrementCount}/>}></Counterone>
        </div>
    )
}

export default CallingRenderAsProps
