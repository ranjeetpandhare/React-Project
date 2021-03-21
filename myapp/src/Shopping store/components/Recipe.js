import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'

var charges=0;
var amt=0;

class Recipe extends Component{
    
  
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    Checkout=()=>{
        alert("Your order disptach within 3 to 4 days")
    }

    render(){
        console.log(charges)
        amt=this.props.total;
        if(amt<500){
            charges=40
        }else if(amt>500 && amt<1000){ charges=10}else{
            charges=0
        }
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+${charges})</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={this.Checkout}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING',charges:charges})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING',charges:charges})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
