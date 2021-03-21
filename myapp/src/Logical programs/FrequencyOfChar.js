import React, { Component } from 'react'

export class FrequencyOfChar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputString: ""
        }
    }
    // onchange = (e) => {
    //     nme = e.target.name;
    //     val = e.target.value;
    //     this.setState({ [nme]: val })
    // }

    render() {
        return (
            <div>
                <input type="text" name="inputString" value={this.state.inputString} />
            </div>
        )
    }
}

export default FrequencyOfChar
