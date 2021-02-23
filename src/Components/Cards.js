import React from "react";
import "./Cards.css";
import CardItem from "./CardsItem";
import UploadForm from "./UploadForm";
import useFirestore from "../hooks/useFireStore";
import { useAuth } from "./AuthContext";
const Cards = () => {
  const { docs } = useFirestore("images");
  const { currentUser, logout } = useAuth();
  var userIsAdmin = false;

  return (
    <div className="cards">
      <UploadForm></UploadForm>
      <h1>Dagens retter</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {docs &&
            docs.map((doc) => (
              <CardItem
                src={doc.url}
                key={doc.id}
                text={doc.imageText}
                amountLeft={doc.amountLeft}
                label={doc.imageLabel}
                price={doc.price}
                id={doc.id}
              ></CardItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
