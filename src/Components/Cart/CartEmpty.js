import React from "react";
import { Link } from "react-router-dom";
function CartEmpty() {
  return (
    <div class="container-fluid mt-5 mb-5">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="mb-5">
            <div class="card-body cart ">
              <div class="col-sm-12 empty-cart-cls text-center mb-5">
                {" "}
                <img
                  src="https://i.imgur.com/dCdflKN.png"
                  width="130"
                  height="130"
                  class="img-fluid mb-4 mr-3"
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
