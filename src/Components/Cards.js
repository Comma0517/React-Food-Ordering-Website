import React from "react";
import "./Cards.css";
import CardItem from "./CardsItem";

function Cards() {
  return (
    <div className="cards">
      <h1>My previous projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="This website"
              label="React"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Fitness tracker"
              label="Android app"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="text"
              label="label"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="text"
              label="label"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="text"
              label="label"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
