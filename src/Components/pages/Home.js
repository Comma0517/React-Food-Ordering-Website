import React from "react";
import "../../App.css";
import Cards from "../Cards";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <LandingPage></LandingPage>
      <Cards />
    </>
  );
}

export default Home;
