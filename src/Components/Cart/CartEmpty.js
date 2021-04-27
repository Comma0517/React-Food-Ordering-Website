import React from "react";
import { Link } from "react-router-dom";
function CartEmpty() {
  return (
    <div className="container">
      <h1>Kurv</h1>
      <div className="center">
        <Link to="/">
          <button className="goToMenuBtn">Gå til menu {""}</button>
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
