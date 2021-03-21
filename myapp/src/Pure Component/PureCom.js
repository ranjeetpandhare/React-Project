import React, { Component,PureComponent} from 'react'

class PureCom extends PureComponent {
    render() {
        console.log("pure componet render")
        return (
            <div>
                PureCom:{this.props.name}
            </div>
        )
    }
}

export default PureCom