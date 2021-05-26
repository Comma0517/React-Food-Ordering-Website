import React, { lazy, Suspense } from "react";
import "../../App.css";
//import Cards from "../Cards";
import LandingPage from "../LandingPage/LandingPage";
import imgPaymentOptions from "../../../src/images/cards.jpg";
import AllowCookies from "../AllowCookies";
import LoadingSpinner from "../Loading/LoadingSpinner";
import CartSticky from "../CartSticky";
import Features from "../Features";
const MenuFeatured = lazy(() => import("../MenuFeatured"));
function Home() {
  return (
    <>
      <div className="album bg-light">
        <LandingPage />
        <AllowCookies />
        <CartSticky />
        <Features />
        <Suspense fallback={<LoadingSpinner />}>
          {" "}
          <MenuFeatured />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
