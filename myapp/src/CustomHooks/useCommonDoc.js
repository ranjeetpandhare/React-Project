import React, { useEffect } from 'react'


//use keyword always small
function useCommonDoc(count) {
    useEffect(() => {
        document.title=`count -${count}`
        
    }, [count])
}

export default useCommonDoc
