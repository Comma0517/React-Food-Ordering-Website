import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/Sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
