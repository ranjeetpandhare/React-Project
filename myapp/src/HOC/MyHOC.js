import React from 'react'

var newData={data:"tq"};
const MyHOC=(ComposedComponent)=> {
   return class A extends React.Component{
        componentDidMount(){
            this.setState({data:newData.data})
        }
        render(){
            return<ComposedComponent {...this.state}/>
        }
    }
}

export default MyHOC