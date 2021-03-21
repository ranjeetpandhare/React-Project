import React, { Component } from 'react'

export class ClassComponentProps extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name1} also known as {this.props.heroname1}</h1>
            </div>
        )
    }
}
export default ClassComponentProps
