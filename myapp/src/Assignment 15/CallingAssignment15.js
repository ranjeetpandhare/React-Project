import React from 'react'
import Q1 from './Q1'
import Q2 from './Q2'
import Q3 from './Q3'
import Q5 from './Q5'
import Q6 from './Q6'
import Q8 from './Q8'
import Q10 from './Q10'
import ComponentC from './ComponentC'
import ComponentB from './ComponentB'
import Appcrud from './HooksForm/Appcrud'

export let userContext=React.createContext();
 export let ChannelContext=React.createContext();

function CallingAssignment15() {
    return (
        <div>
{/* <userContext.Provider value={"web_developer"}>
<ChannelContext.Provider value={"react"}>
<ComponentC/>
<ComponentB/>
</ChannelContext.Provider>
</userContext.Provider> */}
            {/* <Q1/> */}
            {/* <Q2/> */}
            {/* <Q3/> */}
            {/* <Q5/> */}
            {/* <Q6/> */}
            {/* <Q8/> */}
            {/* <userContext.Provider value={{blue:"blue"}}>
            <Q10/>
            </userContext.Provider> */}
            <Appcrud/>
            

        </div>
    )
}

export default CallingAssignment15
