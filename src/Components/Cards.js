import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardsItem";
import UploadForm from "./UploadForm";
import useFirestore from "../hooks/useFireStore";
import SortFood from "./SortFood";

const Cards = () => {
  let { docs } = useFirestore("images");

  const [selectedFood, setSelectedFood] = useState(null);
  useEffect(() => {
    return () => {};
  }, [selectedFood]);

  //splits into 2
  var chunks = function (array, size) {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }

    return results;
  };
  const data = chunks([...docs], 2);

  let sortFood = (id) => {
    setSelectedFood(id);
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm col-2 mt-5 text-center" data-toggle="buttons">
            <SortFood sortFood={sortFood}></SortFood>
            <button
              className="btn btn-primary"
              onClick={(e) => sortFood(e.target.id)}
              id="Indisk"
            >
              Indisk mad
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => sortFood(e.target.id)}
              id="Amerikansk"
            >
              Amerikansk mad
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => sortFood(e.target.id)}
              id="Italiensk"
            >
              Italiensk mad
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => sortFood(e.target.id)}
              id="Nordisk"
            >
              Nordisk mad
            </button>
          </div>
          <div class="col-10">
            {" "}
            <div className="cards">
              <h1 className="cards__header">Dagens retter</h1>
              {localStorage.getItem("loginEmail") === "admin@gmail.com" && (
                <UploadForm />
              )}
              <div className="cards__container">
                <div className="cards__wrapper">
                  {data.map((childs, index) => {
                    return (
                      <ul className="cards__items">
                        {childs.map((c, cindex) => {
                          return (
                            <>
                              {c.imageLabel === selectedFood && (
                                <CardItem
                                  src={c.url}
                                  key={c.id}
                                  text={c.imageText}
                                  amountLeft={c.amountLeft}
                                  label={c.imageLabel}
                                  price={c.price}
                                  id={c.id}
                                  desc={c.desc}
                                  cat={c.cat}
                                ></CardItem>
                              )}
                              {!selectedFood && (
                                <CardItem
                                  src={c.url}
                                  key={c.id}
                                  text={c.imageText}
                                  amountLeft={c.amountLeft}
                                  label={c.imageLabel}
                                  price={c.price}
                                  id={c.id}
                                  desc={c.desc}
                                  cat={c.cat}
                                ></CardItem>
                              )}
                            </>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
