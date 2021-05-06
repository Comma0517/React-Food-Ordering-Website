import React, { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";
import "./Cart.css";
import "../UploadForm.css";
import CartEmpty from "../Cart/CartEmpty";
import { MinusCircle, PlusCircle } from "react-feather";

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
      {cart != 0 && (
        <div className="cart">
          <div className="cart__items">
            <div className="cartItem">
              <h1 className="mb-5">Din kurv</h1>
              {cart.map((doc) => (
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      {doc.name} {doc.price}kr.
                    </div>
                    <div className="col-sm">
                      <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm ">
                          <PlusCircle
                            onClick={() => increaseBasket(doc.id)}
                            className="cursor-pointer"
                            size={28}
                            color={"var(--clr-green-dark)"}
                          />
                        </div>
                        <p className="foodItemAmount col-sm"> {doc.qty}</p>
                        <div className="col-sm ">
                          <MinusCircle
                            onClick={() => decreaseBasket(doc.id, doc.qty)}
                            className="cursor-pointer"
                            size={28}
                            color={"var(--clr-red-dark)"}
                          />
                        </div>
                        <div className="col-sm"></div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <span
                        onClick={() => removeFromOrder(doc.id)}
                        className="deleteItemBtn"
                      >
                        <i class="fas fa-trash fa-2x"></i>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              ))}
              {cart.length != 0 && (
                <button onClick={clearCart} className="clear-btn">
                  Tøm kurven
                </button>
              )}
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

                  <h2 className="form__title">Leveres til:</h2>
                  <div className="form__container">
                    <div>
                      <label htmlFor="adress">Adresse : </label>
                      <input
                        className="input__adress"
                        type="address"
                        id="address"
                        name="address"
                      />
                    </div>
                    <div>
                      <label htmlFor="city">By : </label>
                      <input
                        className="input__adress"
                        type="city"
                        id="city"
                        name="city"
                      />
                    </div>
                    <div style={{ maxWidth: "100%" }}>
                      <label htmlFor="zipcode">Postnummer : </label>
                      <input
                        className="input__adress"
                        type="zipcode"
                        id="zipcode"
                        name="zipcode"
                      />
                    </div>
                    <button
                      className="summary__checkoutBtn"
                      onClick={handleOrder}
                    >
                      Køb
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default Cart;
