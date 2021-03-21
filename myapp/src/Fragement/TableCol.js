import React from 'react'

function TableCol() {
    const item=[];
    return (
        <React.Fragment>
            <h1>react fragemtn using key and then iretare array list</h1>
            {
            item.map(i=(<React.Fragment key={i.id}>
                <h2>this is array printing</h2>
                </React.Fragment>))
}
                {/* <> 
                <td>101</td>
                <td>Ranjeet</td>
                </> */}
           

           
        </React.Fragment>

        
    )
}

export default TableCol

// <React.Fragment>
        
        // </React.Fragment>
