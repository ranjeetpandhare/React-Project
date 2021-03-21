import React, { Component } from 'react'

export class Q8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count:0,
          isPrime: false
        };
      }

checkPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false; 
        }
    }
    return true; 
  }

incrementItem = () => {
    this.setState({count:this.state.count+1});
}

componentDidMount(){
    console.log("mount")
    if (this.checkPrime(this.state.count)) {
        this.setState({ isPrime: true });
    }
    else {
        this.setState({ isPrime: false });
    }
}


render() {
    return (
      <div>
        
    {<h2>{ this.state.count }</h2> }
        {this.state.isPrime?"It is a Prime":"Not a Prime Number"}
        <button onClick={this.incrementItem}>Click me</button>
      </div>
    );
  }
}


export default Q8

