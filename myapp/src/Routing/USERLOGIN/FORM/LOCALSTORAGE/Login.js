import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''   
        }
    }
    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmit=()=>{
        if(this.state.username==='ranjeet' && this.state.password==='123'){
            alert("Login Successfull")
            this.props.history.push('/home')
        }else{
            alert("invalid username and password")
        }
    }
    render(){
    return (
        <div>
            <form>
                UserName:<input type="text" name="text" onChange={this.onChange}/>
                Password:<input type="password" name=":text" onChange={this.onChange}/>
                <button type="btn btn-primary" value="Login" onSubmit={this.onSubmit}/>
                <button type="btn btn-denger" value="Cancal" onCancal={this.onCancal}/>
            </form>
        </div>
    )
}
}

export default Login
