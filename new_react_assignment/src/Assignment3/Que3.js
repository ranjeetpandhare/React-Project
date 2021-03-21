// WAP to use Destructuring props in Class components for
// companyName=” Thinkquotient”, Address=”Pune”
import React, { Component } from 'react'

 class Que3 extends Component {
    render() {
        return (
            <div>
                <h1> the company name is {this.props.companyName} and address is {this.props.Address}</h1>
            </div>
        )
    }
}

export default Que3
