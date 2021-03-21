import React from 'react'

function MemoComponent({name}) {
    console.log("render in memo component")
    return (
        <div>
            <h1>Memo Component{name}</h1>
        </div>
    )
}

export default React.memo(MemoComponent)
