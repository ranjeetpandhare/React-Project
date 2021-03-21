import React from 'react'

const WithCounter=(OriginalComponent,increment)=> {
   class NewComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

    }
    counterIncrement=()=>{
        this.setState(prevState=>{return{count:prevState.count+increment}})
    }
    render(){
        console.log("hoc render")
        console.log(this.props.name)
        return (<OriginalComponent count={this.state.count} 
            counterIncrement={this.counterIncrement} {...this.props}/>)
        }
   }
   return NewComponent
}

export default WithCounter
