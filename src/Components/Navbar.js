import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { ButtonCart } from "./ButtonCart";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
            Food
            <i class="fas fa-utensils" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/products"
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
                Log ind
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
              <i class="fas fa-shopping-cart"></i>
            </ButtonCart>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
