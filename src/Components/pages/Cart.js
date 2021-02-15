import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";

import "../Cards.css";
function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);
  const deliveryCost = 29;
  return (
    <>
      <div className="cards">
        <div className="cards__wrapper">
          {cart.length === 0 && <p>Din kurv er tom</p>}
          {cart &&
            cart.map((doc) => (
              <li>
                {doc.name} {doc.price} kr.
              </li>
            ))}
          {cart.length != 0 && <p>Leveringsgebyr {deliveryCost} kr.</p>}
          {cart.length != 0 && <p>Total {totalPrice + deliveryCost} kr.</p>}
        </div>
      </div>
    </>
  );
}
export default Cart;
