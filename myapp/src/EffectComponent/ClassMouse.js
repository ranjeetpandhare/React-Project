
import React, { Component } from 'react'

 class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,y:0
        }
    }
   logMousePosition=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    componentDidMount(){
        console.log("cmt did mount")
        document.addEventListener('mousemove',this.logMousePosition)
    }
    componentWillUnmount(){
        console.log("cmt will unmount call")
        document.removeEventListener('mousemove',this.logMousePosition)
    }
    render() {
        return (
            <div>
                x-{this.state.x}  y-{this.state.y}
            </div>
        )
    }
}

export default ClassMouse
