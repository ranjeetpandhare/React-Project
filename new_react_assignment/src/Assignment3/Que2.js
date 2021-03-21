// WAP to use Destructure in the functional body for empId=emp101,
// empName=”Yash” salary=15000
import React from 'react'

function Que2(props) {
    const {empId,empName,salary}=props;
    return (
        <div>
            <h1>emp id is {props.empId} and employee name is {props.empName} and salary is{props.salary}</h1>
        </div>
    )
}

export default Que2
