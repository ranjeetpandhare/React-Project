import React from 'react';
import Navbar from './components/Navbar';
// import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ToDoNew from './CRUD Hooks/ToDoNew';
import CradView from './Demo/CradView';
import WorkCard from './Demo/WorkCard';
import BootstarpCard from './Demo/BootstarpCard';

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router> */}
      {/* <ToDoNew /> */}
      {/* <CradView/> */}
      {/* <WorkCard/> */}
      <BootstarpCard/>
    </>
  );
}

export default App;
