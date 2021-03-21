
import React ,{Component,PureComponent} from 'react'
import MemoComponent from './MemoComponent'
//import RegularComponent from './RegularComponent'
//import PureComp from './PureComp'

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
        console.log("parent component render using memo")
        return (
            <div>
                <h1>Parent component</h1>
              <MemoComponent name={this.state.name}></MemoComponent>
            </div>
        )
    }
}

export default ParentComponent
