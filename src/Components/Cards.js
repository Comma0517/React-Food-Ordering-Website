import React from "react";
import "./Cards.css";
import CardItem from "./CardsItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Dagens retter</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/pizza.jpg"
              text="Pizza er et fladt rundt brød med topping af olivenolie og tomatsauce, samt få - eller flere ingredienser som topping af forskellig type. Den kan købes på et pizzeria, en restaurant, eller den kan være hjemmelavet."
              amountLeft="3"
              label="Pizza"
              path="/services"
            />
            <CardItem
              src="images/salmon.jpg"
              text="Laks med porrer er en af de mest populære retter med fisk. Her med spidskål og gulerødder."
              amountLeft="5"
              label="Fisk"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/salad.jpg"
              text="Carpaccio salat er en virkelig lækker opgradering af den traditionelle carpaccio."
              amountLeft="0"
              label="Salat"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
