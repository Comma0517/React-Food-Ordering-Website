import React, { lazy, Suspense } from "react";
import "../../App.css";
//import Cards from "../Cards";
import LandingPage from "../LandingPage/LandingPage";
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

        <Suspense fallback={<LoadingSpinner />}>
          <Features />
          <CartSticky />
          <MenuFeatured />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
