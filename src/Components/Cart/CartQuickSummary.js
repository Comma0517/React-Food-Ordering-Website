import React, { useContext } from "react";
import { Minus, Plus } from "react-feather";
import { CartContext } from "../../Contexts/CartContext";
import "./CartQuickSummary.css";
function CartQuickSummary() {
  const [cart, setCart] = useContext(CartContext);
  const currency = "kr.";
  const zeroes = ",00 ";
  const fullPrice = zeroes + currency;

  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
  };

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
  let totalPrice = 0;
  const deliveryCost = 29;
  if (cart) {
    totalPrice = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price * curr.qty),
      deliveryCost
    );
  }
  return (
    <div>
      <h4 className='d-flex justify-content-between align-items-center mb-3'>
        Din kurv
      </h4>

      <ul className='list-group mb-3 text-center'>
        {cart.map((doc) => (
          <li className=' d-flex justify-content-between row mb-2'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm'>
                  {doc.qty} x {doc.name}
                </div>
                <div className='col-sm '>
                  <button
                    className='btn btn-outline-success btn-sm mobile'
                    onClick={() => increaseBasket(doc.id)}
                  >
                    <Plus />
                  </button>{" "}
                  <button
                    className='btn btn-outline-danger btn-sm mobile'
                    onClick={() => decreaseBasket(doc.id, doc.qty)}
                  >
                    <Minus />
                  </button>{" "}
                </div>
                <div className='col-sm'>
                  {" "}
                  <span className='text-muted col-sm'>
                    {doc.price}
                    {fullPrice}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}

        <li className='d-flex justify-content-between text-center'>
          <span>Total (DKK)</span>
          <span className=''>
            {totalPrice}
            {fullPrice}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CartQuickSummary;
