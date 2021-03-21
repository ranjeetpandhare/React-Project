import React, { Component } from 'react'
import Backgroundimage from './1.jpg'
const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height:'50%',
  width:'50%'
}

    class MouseMoveImage extends Component {
        constructor(props) {
          super(props)
          this.state = {
              x:'',
              y:''


          }
         
        //   this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
         
      }
     
      handleMouseMove=(e)=>{
         
        console.log('onMouseMove',e.clientX, e.clientY)
      }
      
        render() {
          return (
            <div style={styles}>
              <h1>Mouse over the photo:</h1>
              <div
                style={{display: 'flex',justifyContent: 'center', width: '50%', height: '50%'}}
              
                onMouseMove={this.handleMouseMove}
               
              >
                <img style={{}}src={Backgroundimage} alt="" left  />
              </div>
            </div>
          )
        }
      }
      export default MouseMoveImage