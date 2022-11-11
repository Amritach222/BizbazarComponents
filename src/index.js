import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
//import bootstrap ecommerce js and jss file 
import './be5/css/bootstrap3661.css'
import './be5/css/bootstrapc3db.css'
import './be5/css/responsive3661.css'
import './be5/css/ui3661.css'
// import './be5/css/uic3db.css'
// import fonts 
import './be5/fonts/fontawesome/css/all.min.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from './app/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
