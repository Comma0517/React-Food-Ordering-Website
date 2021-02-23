import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useAuth } from "../AuthContext";

import "./Cart.css";

//import CartItem from "../Cart/CartItem";

function Cart() {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
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
          {localStorage.getItem("loginEmail") && (
            <h1>Logget ind som {localStorage.getItem("loginEmail")}</h1>
          )}

          {cart.length === 0 && <h1 className="cart__empy">Din kurv er tom</h1>}
          <div className="cartItem">
            {cart &&
              cart.map((doc) => (
                <li className="cartItem__details">
                  <p>
                    {doc.name}{" "}
                    <span
                      onClick={() => removeFromOrder(doc.id)}
                      className="deleteItemBtn"
                    >
                      <i class="fas fa-trash fa-2x"></i>
                    </span>{" "}
                    <p className="">{doc.price}kr. </p>
                  </p>

                  <span className="removeButton"></span>
                </li>
              ))}
          </div>
        </div>
        {cart.length != 0 && (
          <div className="cart__summary">
            <div className="cart__summary__container">
              <div className="cart__summary__wrapper">
                <h4 className="summary__title">Kurv</h4>
                {cart.length !== 0 && <p>Levering {deliveryCost} kr.</p>}

                <div className="summary__price">
                  <span>TOTAL: </span>

                  {cart.length !== 0 && <span>{totalPrice} kr.</span>}
                </div>
                <button className="summary__checkoutBtn">Køb</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
