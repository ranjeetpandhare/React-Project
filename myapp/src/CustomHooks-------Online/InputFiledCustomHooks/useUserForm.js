import React, { useState } from 'react'

function useUserForm() {

    const [value,setValue]=useState(0);
    const reset=()=>{
        setValue('')
    }
    const bind={
        value,
        onchange:e=>{
            setValue(e.target.value)
        }

    }
    return [value,bind,reset]
}

export default useUserForm
