import React, { useEffect, useState } from "react";

import CardItem from "./CardsItem";
import UploadForm from "./UploadForm";
import useFirestore from "../hooks/useFireStore";
import { Link } from "react-router-dom";

const MenuFeatured = () => {
  let { docs } = useFirestore("images");

  const [selectedFood] = useState(null);
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
  const data = chunks([...docs], 4);

  return (
    <>
      <div className="bgcolor">
        <div className="container album py-5 ">
          <div className="row ">
            <div className="col-12 removepadding ">
              <div className="cards ">
                <h1 className="mt-5">Dagens retter</h1>
                <hr className="line"></hr>
                {localStorage.getItem("loginEmail") === "admin@gmail.com" && (
                  <UploadForm />
                )}
                <div className="cards__container">
                  <div className="cards__wrapper ">
                    {data.map((childs, index) => {
                      return (
                        <ul className="cards__items ">
                          {childs.map((c, cindex) => {
                            return (
                              <>
                                {c.cat === "featured" && (
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
              <div className="text-center mb-5">
                <Link to="/menu" className="btn btn-primary mb-5">
                  Se hele menuen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuFeatured;
