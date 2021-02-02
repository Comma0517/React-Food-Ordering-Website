import React from "react";
import "./Cards.css";
import CardItem from "./CardsItem";
import UploadForm from "./UploadForm";
import useFirestore from "../hooks/useFireStore";
const Cards = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="cards">
      <h1>Dagens retter</h1>

      <UploadForm></UploadForm>
      <div className="cards__container">
        <div className="cards__wrapper">
          <CardItem
            src="images/pizza.jpg"
            text="Pizza er et fladt rundt brød med topping af olivenolie og tomatsauce, samt få - eller flere ingredienser som topping af forskellig type. Den kan købes på et pizzeria, en restaurant, eller den kan være hjemmelavet."
            amountLeft="3"
            label="Pizza"
            path="/services"
          />
          {docs &&
            docs.map((doc) => (
              <CardItem
                src={doc.url}
                key={doc.id}
                text={doc.text}
                layout
                onClick={() => setSelectedImg(doc.url)}
              ></CardItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
