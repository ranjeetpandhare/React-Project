import React, { Component } from 'react'
import DisplayMessage from './DisplayMessage';
import Login from './Login';
import Logout from './Logout';

export class Home extends Component {
    constructor(){
        super();
        this.state={isLoggedIn:false};
    }
    changeStatus=()=>{
/*         this.state.isLoggedIn?this.setState({isLoggedIn:false}):this.setState({isLoggedIn:true});
 */
        this.setState(preState=>({isLoggedIn:!preState.isLoggedIn}));
}
    render() {
        
        return (
            <div>
                <DisplayMessage isLoggedIn={this.state.isLoggedIn}/>
                {(this.state.isLoggedIn)?(<Logout displayHandler={this.changeStatus}/>):(<Login displayHandler={this.changeStatus}/>)}
                
            </div>
        )
    


    }
}

export default Home
