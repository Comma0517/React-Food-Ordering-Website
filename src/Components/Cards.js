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
      <div className="container">
        <div className="row">
          <div
            className="col-sm col-2 mt-5 text-center sortSmall"
            data-toggle="buttons"
          >
            <SortFood sortFood={sortFood}></SortFood>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="Indisk"
            >
              Indisk
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="Amerikansk"
            >
              Amerikansk
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="Italiensk"
            >
              Italiensk
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100 "
              onClick={(e) => sortFood(e.target.id)}
              id="Nordisk"
            >
              Nordisk
            </button>
            <button
              className="btn btn-outline-primary mb-2 w-100"
              onClick={(e) => sortFood(e.target.id)}
              id=""
            >
              Alle retter
            </button>
          </div>
          <div className="col-10 removepadding">
            <h1 className="mt-5">Menu</h1>
            <hr className="line"></hr>{" "}
            <div className="cards">
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
