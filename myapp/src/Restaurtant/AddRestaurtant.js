import Axios from 'axios'
import React, { Component } from 'react'


export class AddRestaurtant extends Component {
    constructor(props) {
        super(props)

        this.state = {
            RestaurtantName: '',
            Address: '',
            Phone: '',
            OpenTime: '',
            CloseTime: '',
        }
    }

    handler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addRestaurtant = (event) => {

        event.preventDefault()
        let object = {
            RestaurtantName: this.state.RestaurtantName,
            Address: this.state.Address,
            Phone: this.state.Phone,
            OpenTime: this.state.OpenTime,
            CloseTime: this.state.CloseTime,
        }


        Axios.post('http://localhost:1337/restaurtantDetails', object).then(Response => console.log(Response))
        alert(" Restaurtant Added successfully..............")

        this.setState({
            RestaurtantName: '',
            Address: '',
            Phone: '',
            OpenTime: '',
            CloseTime: ''
        })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.addRestaurtant}>
                    <label>Restaurtant Name:</label><br />
                    <input type="text" name="RestaurtantName" value={this.state.RestaurtantName} onChange={this.handler} /><br />

                    <label>Address:</label><br />
                    <input type="text" name="Address" value={this.state.Address} onChange={this.handler} /><br />

                    <label>Phone:</label><br />
                    <input type="text" name="Phone" value={this.state.Phone} onChange={this.handler} /><br />

                    <label>OpenTime:</label><br />
                    <input type="text" name="OpenTime" value={this.state.OpenTime} onChange={this.handler} /><br />

                    <label>CloseTime:</label><br />
                    <input type="text" name="CloseTime" value={this.state.CloseTime} onChange={this.handler} /><br />

                    <button>Add Restaurtant</button>
                </form>



            </div>
        )
    }
}

export default AddRestaurtant