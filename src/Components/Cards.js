import React from "react";
import "./Cards.css";
import CardItem from "./CardsItem";
import UploadForm from "./UploadForm";
import useFirestore from "../hooks/useFireStore";
const Cards = () => {
  const { docs } = useFirestore("images");

  //splits into 2
  var chunks = function (array, size = 2) {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };
  const data = chunks(docs, 2);

  return (
    <>
      <div className="cards">
        {localStorage.getItem("loginEmail") === "admin@gmail.com" && (
          <UploadForm />
        )}

        <h1>Dagens retter</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div>
              {data.map((childs, index) => {
                return (
                  <ul className="cards__items">
                    {childs.map((c, cindex) => {
                      return (
                        <CardItem
                          src={c.url}
                          key={c.id}
                          text={c.imageText}
                          amountLeft={c.amountLeft}
                          label={c.imageLabel}
                          price={c.price}
                          id={c.id}
                        ></CardItem>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
