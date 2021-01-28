import { Route, Router, Switch } from "react-router-dom";
import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards></Cards>
      <Footer />
    </>
  );
}

export default Home;
