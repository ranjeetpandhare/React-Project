import React, { useState } from 'react'

function useInputs(initialValue) {
   const [value, setvalue] = useState(initialValue);
   const reset=()=>{
       setvalue('')
   }
   const bind={
       value,onChange:e=>{setvalue(e.target.value)}
   }
   return[value,bind,reset]
}

export default useInputs
