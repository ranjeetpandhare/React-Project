import React from 'react'
import './DottedBoxCss.css'

const StylingExample = (props)=> {
    let className1=props.primary?'primary':'';
    return ( 
        <div className = 'DottedBoxCss' >
       <p className = "DottedBoxCss_content" > welcome to css </p> 
        <h1 className = "primary" > hello </h1> 
        <h1 className={className1}>hello jan batch</h1>
        <h1 className1></h1>

       </div>
    )
}
export default StylingExample