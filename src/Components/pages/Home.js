import React, { lazy, Suspense } from "react";
import "../../App.css";
//import Cards from "../Cards";
import LandingPage from "../LandingPage/LandingPage";
import imgPaymentOptions from "../../../src/images/cards.jpg";
import AllowCookies from "../AllowCookies";
import LoadingSpinner from "../Loading/LoadingSpinner";
import CartSticky from "../CartSticky";
const MenuFeatured = lazy(() => import("../MenuFeatured"));
function Home() {
  return (
    <>
      <LandingPage />
      <AllowCookies />
      <CartSticky />
      <Suspense fallback={<LoadingSpinner />}>
        {" "}
        <MenuFeatured />
      </Suspense>
    </>
  );
}

export default Home;
