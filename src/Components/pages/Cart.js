import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";
import "./Cart.css";
import "../UploadForm.css";
import { Link } from "react-router-dom";

//import CartItem from "../Cart/CartItem";

function Cart() {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const deliveryCost = 29;
  const totalPrice =
    cart.reduce((acc, curr) => acc + parseInt(curr.price), 0) + deliveryCost;

  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
  };
  function handleOrder() {
    if (!currentUser) {
      history.push("/login");
    }
  }
  function navigateToMenu() {}

  return (
    <>
      {cart.length === 0 && (
        <div>
          <h1 className="cart__empy">
            Din kurv er tom <i class="far fa-sad-cry"></i>
          </h1>
          <div className="center">
            <Link to="/" onClick={navigateToMenu}>
              <button className="goToMenuBtn">Gå til menu {""}</button>
            </Link>
          </div>
        </div>
      )}
      <div className="cart">
        <div className="cart__items">
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
    </>
  );
}
export default Cart;
