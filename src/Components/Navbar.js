/* eslint-disable eqeqeq */
import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Button";
import { ButtonCart } from "./ButtonCart";
import { ButtonProfile } from "./ButtonProfile";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "./CartContext";
import ReactGA from "react-ga";
import { UserContext } from "./UserContext";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  let [buttonText] = useState("Log ind");
  // eslint-disable-next-line
  const [cart] = useContext(CartContext);
  const [currentUser] = useContext(UserContext);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + parseInt(curr.price * curr.qty),
    0
  );

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const deliveryCost = 29;
  const currency = "kr.";

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  function handleCartClick() {
    ReactGA.event({
      category: "Button",
      action: "Cart navbar icon clicked",
    });
  }
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SaveAMeal
            <i class="fas fa-utensils" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              {!localStorage.getItem("loginEmail") && (
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  <i class="fas fa-user"></i>
                  <br />
                  Log ind
                </Link>
              )}
              {localStorage.getItem("loginEmail") && (
                <Link
                  to="/profile"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  <i class="fas fa-user"></i>
                  <br />
                  {localStorage.getItem("loginFullname")}
                </Link>
              )}
            </li>
            <li>
              <Link
                to="/cart"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <i class="fas fa-shopping-cart"></i>
                <br />
                {cart != 0 && totalPrice + deliveryCost + currency}
              </Link>
            </li>
          </ul>
          {!currentUser && button && (
            <Button buttonStyle="btn--outline">
              {" "}
              <i class="fas fa-user"></i> {buttonText}
            </Button>
          )}
          {currentUser && button && (
            <ButtonProfile buttonStyle="btn--outline">
              {currentUser}
            </ButtonProfile>
          )}

          {button && (
            <ButtonCart onClick={handleCartClick} buttonStyle="btn--outline">
              {" "}
              {cart != 0 && cart.length}
              <i class="fas fa-shopping-cart"></i>{" "}
              {cart != 0 && totalPrice + deliveryCost + currency}
            </ButtonCart>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
