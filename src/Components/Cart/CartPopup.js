import React from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

function CartPopup(props) {
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Din kurv</h5>
          <CartSummary></CartSummary>
        </div>
        <div class="container mb-4 text-center">
          <div class="row">
            <div class="col">
              {" "}
              <Link to="/cart" className="btn btn-primary w-50">
                Til kassen
              </Link>
            </div>
            <div class="col">
              {" "}
              <button
                className="btn btn-outline-primary"
                onClick={props.togglePopup}
              >
                Fortsæt med at handle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
