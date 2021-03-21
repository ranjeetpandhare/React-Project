import React, { Component } from 'react';
import './Cal.css';
import KeyPadComponent from "../components/KeyPadComponent";

class DemoCal extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }  
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


        calculate=() => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator">
                    <h1>Simple Calculator</h1>

                    <div className="result">
                    <h2><i>{this.state.result}</i></h2>
                    </div>
            
                    <KeyPadComponent onClick={this.onClick}/>

                    

                </div>
            </div>
        );
    }
}

export default DemoCal;