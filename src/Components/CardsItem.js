import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { projectFirestore } from "../Firebase";
import ReactGA from "react-ga";
function CardItem(props) {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);

  function addToCart() {
    const foodItem = {
      name: props.text,
      price: props.price,
      id: Math.random().toString(36).substr(2, 9),
    };
    setCart((currentState) => [...currentState, foodItem]);
    ReactGA.event({
      category: "Button",
      action: "AddToCart clicked",
    });
  }
  const removeCard = () => {
    projectFirestore.collection("images").doc(props.id).delete();
  };

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Food" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h4 className="cards__item__text">
              {props.text}
              <h3 className="cards__item__price">{props.price},-</h3>
            </h4>
            <p className="item-text">{props.desc}</p>
            <div>
              <button onClick={addToCart} className="cards__item_button">
                <i class="fas fa-plus"></i>
              </button>
              {localStorage.getItem("loginEmail") === "admin@gmail.com" && (
                <span
                  onClick={removeCard}
                  className="cards__item_button_remove"
                >
                  <i class="fas fa-trash fa-2x"></i>
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
