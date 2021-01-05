import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header.js'; 
import "./Header.css";
import Home from './Home.js';
import "./Home.css";
import Product from './Product';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";



function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
    return () => {
      //cleanup
      unsubscribe();
    }
  }, []);

  console.log(user);


  return (
    <Router>   { /*Router is like the wrapping parent that gives the childrens properties that they can use*/ } 
    <div className="App">
      <Switch> 
        <Route path="/checkout"> {/*Route is what determines what is displayed on URL */ }
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
