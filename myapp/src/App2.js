import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Shopping store/components/Navbar'
import Home from './Shopping store/components/Home'
import Cart from './Shopping store/components/Cart'

class App2 extends Component {
  render() {
    return (
      <div>
        <h1>welcome</h1>
       <BrowserRouter>
       
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
             
       </BrowserRouter>
       <h1>copyrights 2007-20020</h1>
       </div>
      
    );
  }
}

export default App2;
