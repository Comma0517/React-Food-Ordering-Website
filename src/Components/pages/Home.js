import React from "react";
import "../../App.css";
import Cards from "../Cards";
import LandingPage from "../LandingPage/LandingPage";
import imgPaymentOptions from "../../../src/images/cards.jpg";
import AllowCookies from "../AllowCookies";
function Home() {
  return (
    <>
      <LandingPage />
      <AllowCookies />
      <Cards />
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
