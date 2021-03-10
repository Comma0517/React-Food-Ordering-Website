import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import AboutUs from "./Components/pages/AboutUs";
import SignUp from "./Components/pages/Signup";
import Profile from "./Components/pages/Profile";
import Login from "./Components/Login";
import Cart from "./Components/pages/Cart";
import { AuthProvider } from "./Components/AuthContext";
import { CartProvider } from "./Components/CartContext";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import ScrollToTop from "./Components/ScrollToTop";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.pageview(location.pathname);
});
const App = ({ store, persistor }) => {
  useEffect(() => {
    ReactGA.initialize("UA-191807319-1");
  }, []);

  return (
    <>
      <Router history={history}>
        <ScrollToTop />
        <CartProvider>
          <Switch>
            <AuthProvider>
              <Navbar />
              <Route path="/" exact component={Home} />
              <Route path="/AboutUs" exact component={AboutUs} />
              <Route path="/Sign-up" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <Route path="/cart" exact component={Cart} />
            </AuthProvider>
          </Switch>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
};

export default App;
