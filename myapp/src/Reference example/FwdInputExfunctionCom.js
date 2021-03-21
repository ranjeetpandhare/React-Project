import React from 'react'

const FwdInputExfunctionCom = React.forwardRef((props,ref)=> {
    return (
        <div>
            username:<input type="text" ref={ref}/><br/>
            password:<input type="text"/>
        </div>
    )
})

export default FwdInputExfunctionCom

