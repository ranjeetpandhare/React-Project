import React, { Component } from 'react'

class RefExample extends Component {
    constructor(props) {
        super(props)
        // 1 step refernec
        this.inputref=React.createRef()
        this.inputref1=React.createRef()
    }
    componentDidMount(){
        console.log(this.inputref);
        console.log(this.inputref.current);
        // 3 step refernec 
        this.inputref.current.focus();
       // this.inputref1.current.focus();
    }
    
    handler=()=>{
       let name1=this.inputref.current.value;
       let pass=this.inputref1.current.value;

        alert(`${name1} and paswwword is ${pass}`);
        console.log(name1)

    }
    render() {
        return (
            <div >
                {/* //2 step refernec */}
                Username:<input ref={this.inputref} type="text" required></input><br/>
                password:<input ref={this.inputref1} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="password should contains 6  characters long " required></input><br/>
                <button onClick={this.handler} type ="button">Submit</button>
            </div>
        )
    }
}

export default RefExample
