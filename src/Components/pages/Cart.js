/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Contexts/CartContext";

import "./Cart.css";
import "../UploadForm.css";
import CartEmpty from "../Cart/CartEmpty";
import CartFill from "../CartFill";

function Cart() {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  const deliveryCost = 29;
  // eslint-disable-next-line
  let totalPrice = 0;
  if (cart) {
    totalPrice = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price * curr.qty),
      deliveryCost
    );
  }

  useEffect(() => {
    if (cart) {
      totalPrice =
        cart.reduce((acc, curr) => acc + parseInt(curr.price), 0) +
        deliveryCost;
    }
  }, [cart]);

  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
  };

  function clearCart() {
    setCart([]);
  }
  const increaseBasket = (id) => {
    setCart(
      cart.map((CartItem) =>
        CartItem.id === id ? { ...CartItem, qty: CartItem.qty + 1 } : CartItem
      )
    );
  };
  const decreaseBasket = (id, qty) => {
    setCart(
      cart.map((CartItem) =>
        CartItem.id === id ? { ...CartItem, qty: CartItem.qty - 1 } : CartItem
      )
    );
    removeEmptyItems(id, qty); // if quantity is 0 remove the food from the basket
  };
  const removeEmptyItems = (id, qty) => {
    if (qty === 1) {
      removeFromOrder(id);
    }
  };
  return (
    <>
      {cart.length === 0 && <CartEmpty />}
      {cart.length !== 0 && (
        <CartFill
          decreaseBasket={decreaseBasket}
          clearCart={clearCart}
          increaseBasket={increaseBasket}
          removeFromOrder={removeFromOrder}
          totalPrice={totalPrice}
          cart={cart}
        />
      )}
    </>
  );
}
export default Cart;
