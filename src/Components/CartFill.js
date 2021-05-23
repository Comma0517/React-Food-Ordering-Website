import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { MinusCircle, PlusCircle, UserPlus } from "react-feather";
import imgPaymentOptions from "../../src/images/cards.jpg";
import GoogleLoginHandler from "./GoogleLoginHandler";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

function CartFill(props) {
  const [cart] = useContext(CartContext);
  const currency = "kr.";
  const zeroes = ",00 ";
  const fullPrice = zeroes + currency;
  const [currentUser] = useContext(UserContext);

  let qty = 0;
  if (cart) {
    qty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Din kurv</span>
            <span className="badge badge-primary badge-pill ">{qty}</span>
          </h4>
          <ul className="list-group mb-3">
            {cart.map((doc) => (
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">
                    {doc.name}{" "}
                    <PlusCircle
                      onClick={() => props.increaseBasket(doc.id)}
                      className="cursor-pointer"
                      size={22}
                      color={"var(--clr-green-dark)"}
                    />
                    <span className="p-2 text-black">{doc.qty}</span>
                    <MinusCircle
                      onClick={() => props.decreaseBasket(doc.id, doc.qty)}
                      className="cursor-pointer"
                      size={22}
                      color={"var(--clr-red-dark)"}
                    />
                  </h6>

                  <small className="text-muted"></small>
                </div>
                <span className="text-muted">
                  {doc.price}
                  {fullPrice}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="">
                <h6 className="my-0">Levering</h6>
              </div>
              <span className="text-secondary">29{fullPrice}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Rabatkode</h6>
                <small>Velkomst rabat - 10%</small>
              </div>
              <span className="text-success">
                {" "}
                {Math.trunc(props.totalPrice * 0.1)}
                {fullPrice}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (DKK)</span>
              <strong>
                {Math.trunc(props.totalPrice * 0.9)}
                {fullPrice}
              </strong>
            </li>
          </ul>

          <form className="card p-2">
            <small className="text-secondary mb-1">
              Har du fået en Rabatkode? Indtast den her
            </small>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Indtast rabatkode"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
        {!currentUser && (
          <div className="col-md-8 order-md-1">
            <h4 className="mb-4">Ny hos SaveAMeal? 😊 </h4>
            <div className="alert alert-primary" role="alert">
              <div className="mb-4">
                {" "}
                Venligst log ind for at gennemføre ordren.
              </div>
              <div className="pb-2">
                {" "}
                <GoogleLoginHandler></GoogleLoginHandler>
              </div>
              <span className="ml-5 pl-3">Eller</span> <br></br>
              <div className="pt-2">
                <Link to="/sign-up" className="btn btn-primary">
                  <UserPlus size={24}></UserPlus> Opret konto
                </Link>
              </div>
            </div>
          </div>
        )}
        {currentUser && (
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Personlige oplysninger</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Navn</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Indtast dit fornavn"
                    value={localStorage.getItem("loginFirstName")}
                    style={{ backgroundColor: "var(--clr-grey-10)" }}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Efternavn</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Indtast dit efternavn"
                    value={localStorage.getItem("loginLastName")}
                    style={{ backgroundColor: "var(--clr-grey-10)" }}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Indtast din email"
                  value={localStorage.getItem("loginEmail")}
                  style={{ backgroundColor: "var(--clr-grey-10)" }}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address htmlFor shipping updates.
                </div>
              </div>
              <h4 className="mb-3">Leveringsadresse</h4>
              <div className="mb-3">
                <label htmlFor="address">Addresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Indtast vejnavn"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="zip">Postnummer</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder="Indtast dit postnummer"
                />
              </div>

              <hr className="mb-4" />

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Gem min leveringsadresse til næste ordre
                </label>
              </div>
              <hr className="mb-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Kort
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="mobilepay"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="mobilepay">
                    Mobile Pay
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Navn på kort</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    indtast navnet der står på dit kort
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Bestil og betal med kort ({props.totalPrice}
                {fullPrice})
              </button>
            </form>
          </div>
        )}
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <img
          className=" mb-4 w-25 img-fluid hd"
          src={imgPaymentOptions}
          alt="payment options"
        ></img>

        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default CartFill;
