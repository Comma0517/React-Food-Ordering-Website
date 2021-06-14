import React, { useContext, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext";
import { projectFirestore } from "../Firebase";
import ReactGA from "react-ga";

function CardItem(props) {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const foodItem = {
      name: props.text,
      price: props.price,
      id: Math.random().toString(36).substr(2, 9),
      qty: 1,
    };
    let exists = false;
    if (cart) {
      exists = cart.find((x) => x.name === foodItem.name); // check if cart already has the foodItem in cart
    }
    if (exists) {
      setCart(
        cart.map((x) =>
          x.name === foodItem.name ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCart((currentState) => [...currentState, foodItem]);
    }

    ReactGA.event({
      category: "Button",
      action: "AddToCart clicked",
    });
  };

  const removeCard = () => {
    projectFirestore.collection("images").doc(props.id).delete();
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <li className='cards__item bg-light'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Food'
              src={props.src}
              loading='lazy'
            />
          </figure>
          <div className='cards__item__info'>
            <div className='cards__item__text'>
              {props.text}
              <h4 className='cards__item__price'>{props.price},-</h4>
            </div>
            <p className='item-text'>{props.desc}</p>
            <div>
              <button
                onClick={addToCart}
                className='btn btn-primary btn-lg rouned '
              >
                <i className='fas fa-plus'></i> <small>Tilføj</small>
              </button>
              {localStorage.getItem("loginEmail") === "admin@gmail.com" && (
                <span
                  onClick={removeCard}
                  className='cards__item_button_remove'
                >
                  <i className='fas fa-trash fa-2x'></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
