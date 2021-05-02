import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleItem from "./components/SingleItem";

function App() {
  const { currentItem } = useSelector((state) => state.shop);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!currentItem ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
