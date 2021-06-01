import React, { useContext, useState } from "react";
import "./CartSticky.css";
import { ShoppingCart } from "react-feather";
import { CartContext, CartProvider } from "../Contexts/CartContext";

import CartPopup from "./Cart/CartPopup";

function CartSticky() {
  const [cart] = useContext(CartContext);
  const [showPopup, setShowPopup] = useState();
  let qty = 0;
  if (cart) {
    qty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  }
  const togglePopup = () => setShowPopup(!showPopup);
  return (
    <>
      {!showPopup && (
        <div className="sticky float-right hvr-grow">
          <div className=" rounded-circle border border-primary shadow ">
            <span className="circle" onClick={togglePopup}>
              <ShoppingCart></ShoppingCart>
              {qty > 0 && <span className="cartAmount text-center">{qty}</span>}
            </span>
          </div>
        </div>
      )}
      {showPopup && (
        <>
          <div className="stickyPopup ">
            <CartPopup togglePopup={togglePopup} />
          </div>
          <div className="sc-popup-open ">
            <div className="rounded-circle border border-primary shadow hvr-shrink">
              <span onClick={togglePopup}>
                <span className="circle">
                  <ShoppingCart></ShoppingCart>
                  {qty > 0 && (
                    <span className="cartAmount text-center">{qty}</span>
                  )}
                </span>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CartSticky;
