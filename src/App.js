import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Cart from './Components/Cart/Cart';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import OrderConfirem from './Components/OrderConfirm/OrderConfirem';
import PrivateRoute from './Components/Login/PrivateRoute'
import Contact from './Components/Contact/Contact';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App" >
        <Switch>
          <Route path="/home" component={Home}></Route>
            
          
          <Route path="/login" component={Login} >
            
          </Route>
          <Route path="/register"> 
          <Register></Register>
          </Route>
          <Route path="/product/:id" component={SingleProduct}></Route>
          <Route path="/cart/:id?" component={Cart}></Route>
          {/* <PrivateRoute exact path="/order/:id" >
            <OrderConfirem></OrderConfirem>
          </PrivateRoute> */}
          <PrivateRoute exact path="/order/:id" ><OrderConfirem></OrderConfirem></PrivateRoute>
          
          <PrivateRoute exact path="/order/:id" >
            <OrderConfirem></OrderConfirem>
          </PrivateRoute>
          <Route path="/contact"><Contact></Contact></Route>
          <Route exact path="/" component={Home}></Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
