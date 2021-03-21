import React from 'react'

function Title({title}) {
    console.log(`rendering ${title}`)
    return (
        <div>
            <h1>Use callback hook example</h1>
        </div>
    )
}

export default React.memo(Title)
