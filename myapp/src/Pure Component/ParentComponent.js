
import React ,{Component,PureComponent} from 'react'
//import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

 class ParentComponent extends PureComponent { //PureComponent
     constructor(props) {
         super(props)
     
         this.state = {
              name:"ranjeet"
         }
     }
     componentDidMount(){
         setInterval(()=>this.setState({name:"jeet"}),2000)
     }
     
    render() {
        console.log("parent component render")
        return (
            <div>
                <h1>Parent component</h1>
                {/* {this.state.name} */}
                {/* <RegularComponent name={this.state.name}/> */}
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
