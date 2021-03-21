import React from 'react'

//destructuring in function par4meter itself using function keyword

// export default function FunctionDe_structureExample(name1,age1) {
//     return (
//         <div>
//             <h1> hello {props.name1} and age is {props.age1}</h1>
            
//         </div>
//     )
// }

//destructuring in function body 

// export default function FunctionDe_structureExample(props) {
//     const{name1,age1}=props;
//     return (
//         <div>
//             <h1> hello {name1} and age is {age1}</h1>
            
//         </div>
//     )
// }
//destructuring in function body in fatarrow
 const FunctionDe_structureExample=({name1,age1})=>{
    return(
        <div>
            <h1> hi {name1} and {age1} </h1>
        </div>
    )
}
export default FunctionDe_structureExample