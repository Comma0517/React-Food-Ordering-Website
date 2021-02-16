import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";

import "./Cart.css";

//import CartItem from "../Cart/CartItem";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice1, setTotalPrice] = useState(0);
  const deliveryCost = 29;
  const totalPrice =
    cart.reduce((acc, curr) => acc + parseInt(curr.price), 0) + deliveryCost;

  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
  };

  return (
    <>
      <div className="cart">
        <div className="cart__items">
          <h1>Ordre:</h1>
          <div></div>
          {cart.length === 0 && <h1>Din kurv er tom</h1>}
          {cart &&
            cart.map((doc) => (
              <li>
                {doc.name} {doc.price} kr.{" "}
                <span
                  className="removeButton"
                  onClick={() => removeFromOrder(doc.id)}
                >
                  <i class="fas fa-trash fa-1x"></i>
                </span>
              </li>
            ))}
        </div>
        <div className="cart__summary">
          <h4 className="summary__title">Kurv</h4>
          {cart.length != 0 && <p>Levering {deliveryCost} kr.</p>}

          <div className="summary__price">
            <span>TOTAL: ({cart.length} retter)</span>

            <span>{totalPrice} kr.</span>
          </div>
          <button className="summary__checkoutBtn">Køb</button>
        </div>
      </div>
    </>
  );
}
export default Cart;
