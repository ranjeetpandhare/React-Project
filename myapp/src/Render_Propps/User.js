import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
                {/* String passed */}
                {/* {this.props.name} */}

                {/* Object passed */}
                {/* {this.props.obj.name} */}

                {/* Array passed */}
                {/* {this.props.name} */}

                {/* booelan passed */}
                {/* {this.props.displayname?<h1>welcome user</h1>:<h1>This is not for user</h1>} */}

                {/* number passed */}
                {/* {this.props.age} */}

                {/* function passed */}
                {/* {this.props.name()} */}
                

            </div>
        )
    }
}

export default User

  <p>condition 1 is true then status is -</p>
  {status1 ? <p>Loading...</p> :<p>Status is Not Loading</p>}

  <p>condition 2 is false then status is-</p>
  {status2 ? <p>Loading...</p> :<p>Status is Not Loading</p>}
