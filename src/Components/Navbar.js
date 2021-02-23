import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Button";
import { ButtonCart } from "./ButtonCart";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "./CartContext";
import { useAuth } from "./AuthContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);
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
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Om os
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <i class="fas fa-user"></i>
                <br />
                Log ind
              </Link>
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
          {button && (
            <Button buttonStyle="btn--outline">
              {" "}
              <i class="fas fa-user"></i> Log ind
            </Button>
          )}
          {button && (
            <ButtonCart buttonStyle="btn--outline">
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
