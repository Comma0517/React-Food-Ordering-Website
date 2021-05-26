import React, { useEffect } from "react";
import "./App.css";
import "./custom.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import SignUp from "./Components/pages/Signup";
import Profile from "./Components/pages/Profile";
import Login from "./Components/Login";
import Cart from "./Components/pages/Cart";
import { AuthProvider } from "./Contexts/AuthContext";
import { CartProvider } from "./Contexts/CartContext";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import ScrollToTop from "./Components/ScrollToTop";
import ReactGA from "react-ga";
import { UserProvider } from "./Contexts/UserContext";
import ContactUs from "./Components/pages/ContactUs";
import Menu from "./Components/pages/Menu";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-191807319-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <UserProvider>
          <CartProvider>
            <Switch>
              <AuthProvider>
                <Navbar />
                <Route path="/" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/Sign-up" exact component={SignUp} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/profile" exact component={Profile} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/ContactUs" exact component={ContactUs} />
              </AuthProvider>
            </Switch>
          </CartProvider>
        </UserProvider>
        <Footer />
      </Router>
    </>
  );
};

export default App;
