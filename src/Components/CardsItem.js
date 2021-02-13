import React, { useState } from "react";

function CardItem(props) {
  const [cart, setCart] = useState([]);
  const addToCart = () => {};
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Food Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h4 className="cards__item__text">
              {props.text}
              <h3 className="cards__item__price">{props.price},-</h3>
            </h4>
            <p className="cards_item_amountLeft">
              Der er {props.amountLeft} tilbage af denne ret
            </p>
            <button onClick={addToCart} className="cards__item_button">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
