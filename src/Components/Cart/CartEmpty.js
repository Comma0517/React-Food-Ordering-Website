import React from "react";
import { Link } from "react-router-dom";
function CartEmpty() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        <div className="col-md-12 mb-5">
          <div className="mb-5">
            <div className="card-body cart ">
              <div className="col-sm-12 empty-cart-cls text-center mb-5">
                {" "}
                <img
                  src="https://i.imgur.com/dCdflKN.png"
                  width="130"
                  height="130"
                  className="img-fluid mb-4 mr-3"
                  alt="cart Is Empty"
                />
                <h3>
                  <strong>Din kurv er tom</strong>
                </h3>
                <Link to="/">
                  <button className="goToMenuBtn">Gå til menu {""}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
