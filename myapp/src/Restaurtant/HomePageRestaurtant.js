import Axios from 'axios'
import React, { Component } from 'react'


export class HomePageRestaurtant extends Component {


    }


        Axios.get('http://localhost:1337/restaurtantDetails', object).then(Response => console.log(Response))
        data.reverse();



    render() {
        return (
            <div>
                <form onSubmit={this.displayRestaurtant}>
                    <h1>Restaurtant Names</h1>
                    <input type="text" name="RestaurtantName" value={this.state.RestaurtantName} onChange={this.handler} /><br />
                    <button>Add Restaurtant</button>
                </form>



            </div>
        )
    }
}

export default HomePageRestaurtant