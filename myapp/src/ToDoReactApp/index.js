
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from '../serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
   
  
    <App/>,
   
   
  document.getElementById('root')
 
);
serviceWorker.unregister();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'
// import cartReducer from './components/reducers/cartReducer';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore(cartReducer);

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
