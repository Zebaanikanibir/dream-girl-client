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
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App" >
        <Switch>
          <Route path="/home" component={Home}></Route>
            
          
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}> </Route>
          <Route path="/product/:id" component={SingleProduct}></Route>
          <Route path="/cart/:id?" component={Cart}></Route>
          <Route exact path="/" component={Home}></Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
