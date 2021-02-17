import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import AboutUs from "./Components/pages/AboutUs";
import SignUp from "./Components/pages/Signup";
import Login from "./Components/Login";
import Cart from "./Components/pages/Cart";
import { AuthProvider } from "./Components/AuthContext";
import { CartProvider } from "./Components/CartContext";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/AboutUs" exact component={AboutUs} />
            <AuthProvider>
              <Route path="/Sign-up" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <Route path="/cart" exact component={Cart} />
            </AuthProvider>
          </Switch>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
