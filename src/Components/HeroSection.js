import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/foodimage.jpg" />
      <h1>Bæredygtig mad bragt lige til døren</h1>
    </div>
  );
}

export default HeroSection;
