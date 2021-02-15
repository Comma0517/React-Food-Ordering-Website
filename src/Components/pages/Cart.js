import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";

import "../Cards.css";
function Cart() {
  const [cart, setCart] = useContext(CartContext);
  return (
    <>
      <div className="cards">
        <div className="cards__wrapper">
          {cart &&
            cart.map((doc) => (
              <li>
                {doc.name} {doc.price}
              </li>
            ))}
        </div>
      </div>
    </>
  );
}
export default Cart;
