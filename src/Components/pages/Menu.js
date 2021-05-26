import React from "react";
import { Suspense } from "react";
import Cards from "../Cards";
import CartSticky from "../CartSticky";
import LoadingSpinner from "../Loading/LoadingSpinner";

function Menu() {
  return (
    <>
      {" "}
      <br></br>
      <CartSticky />
      <Suspense fallback={<LoadingSpinner />}>
        {" "}
        <Cards />
      </Suspense>
    </>
  );
}

export default Menu;
