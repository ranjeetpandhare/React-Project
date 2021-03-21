import React, { Component } from 'react'

export class HomeImage extends Component {
    constructor() {
        super()
    
        this.onClickfwd=this.onClickfwd.bind(this)

       const img0=require('./images/1.jpg');
       const img1=require('./images/2.jpg');
       const img2=require('./images/3.jpg');
       const img3=require('./images/4.jpg');
       const img4=require('./images/5.jpg');
       const img5=require('./images/6.jpg');
       const img6=require('./images/7.jpg');
       const img7=require('./images/8.jpg');
       const img8=require('./images/9.jpg');
       const img9=require('./images/10.jpg');
       const img10=require('./images/11.jpg');
   
       this.state={
           index:0,
           imgList:[img0,img1,img2]
       }
    }
    onClickfwd(){
        if(this.state.index + 1 === this.state.imgList.length){
            this.setState({
                index:0
            })
        }else{
            this.setState({
               index:this.state.index + 1
            })

        }

    }
    render() {
        return (
            <div>
                <img src={this.state.imgList[this.state.index]} alt=""/><br/><br/><br/>

                <button className="btn btn-primary" onClick={this.onClickfwd}>fwd-Image</button>
            </div>
        )
    }
}

export default HomeImage
