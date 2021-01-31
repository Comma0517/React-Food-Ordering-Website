import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/Signup";
import Login from "./Components/Login";
import { AuthProvider } from "./Components/AuthContext";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/Sign-up" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
