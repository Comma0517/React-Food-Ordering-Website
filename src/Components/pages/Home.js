import React, { lazy, Suspense } from "react";
import "../../App.css";
//import Cards from "../Cards";
import LandingPage from "../LandingPage/LandingPage";
import imgPaymentOptions from "../../../src/images/cards.jpg";
import AllowCookies from "../AllowCookies";
import LoadingSpinner from "../Loading/LoadingSpinner";
const Cards = lazy(() => import("../Cards"));
function Home() {
  return (
    <>
      <LandingPage />
      <AllowCookies />
      <Suspense fallback={<LoadingSpinner />}>
        {" "}
        <Cards />
      </Suspense>

      <div className=" text-center">
        <img
          className="mb-4 w-25 hd"
          src={imgPaymentOptions}
          alt="payment options"
        ></img>
      </div>
    </>
  );
}

export default Home;
