import React, { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";
import "./Cart.css";
import "../UploadForm.css";
import CartEmpty from "../Cart/CartEmpty";
import { MinusCircle, PlusCircle } from "react-feather";
import CartFill from "../CartFill";

function Cart() {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const deliveryCost = 29;
  let totalPrice =
    cart.reduce(
      (acc, curr) => acc + parseInt(curr.price * curr.qty),
      deliveryCost
    ) + deliveryCost;

  useEffect(() => {
    totalPrice =
      cart.reduce((acc, curr) => acc + parseInt(curr.price), 0) + deliveryCost;
  }, [cart]);

  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
  };
  function handleOrder() {
    if (!currentUser) {
      history.push("/login");
    }
  }
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
      {cart.length !== 0 && <CartFill />}
    </>
  );
}
export default Cart;
