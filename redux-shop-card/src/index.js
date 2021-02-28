import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { reducer } from "./reducer/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}> 
      <Router>
        <App/>
      </Router>
    </Provider>,
  document.getElementById('root')
);
