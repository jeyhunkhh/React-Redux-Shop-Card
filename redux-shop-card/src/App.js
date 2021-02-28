import  React  from "react";
import { Route } from "react-router-dom";
import "./style.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const App = () => {
  return (
      <div className="container">
        <div className="App">
        <ToastContainer
        position="bottom-right"
        autoClose={2000}
        ></ToastContainer>
          <h1>
            Shopping carts manufacturing
            <img
              src="https://avatars3.githubusercontent.com/u/60869810?v=4"
              alt="React-Redux"
            />{" "}
            React-Redux
          </h1>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
  );
}

export default App;