import React, { useContext } from "react";
import "./CartSticky.css";
import { ShoppingCart } from "react-feather";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";

function CartSticky() {
  const [cart] = useContext(CartContext);
  let qty = 0;
  if (cart) {
    qty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  }

  return (
    <>
      <div className="sticky float-right pt-4 pr-4">
        <div className="sticky-top rounded-circle border border-primary ">
          <a>
            <Link className="circle" to="/cart">
              <ShoppingCart></ShoppingCart>
              {qty > 0 && <span className="cartAmount text-center">{qty}</span>}
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default CartSticky;
