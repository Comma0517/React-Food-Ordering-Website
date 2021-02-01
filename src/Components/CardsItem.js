import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <p className="cards_item_amountLeft">
              Der er {props.amountLeft} tilbage af denne ret
            </p>
            <button className="cards__item_button">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
