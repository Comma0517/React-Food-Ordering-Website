import React from "react";
import { UserPlus } from "react-feather";
import { Link } from "react-router-dom";
import "./Features.css";
function Features() {
  return (
    <div className="bg-color">
      <div class="container px-4 py-4 bg-color" id="featured-3">
        <h3 class="pb-2 border-bottom text-center">Så nemt er det.</h3>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <i class="fas fa-hamburger"></i>
            </div>
            <h2>Læg retter i kurven</h2>
            <p>
              Hvad kunne du tænke dig? Se dagens retter her, eller gå til{" "}
              <Link to="/menu">menuen</Link>.
            </p>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <UserPlus size={35} color="white"></UserPlus>
            </div>
            <h2>Log ind</h2>
            <p>Log hurtigt ind med google og indtast dit vejnavn.</p>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <i class="fas fa-motorcycle"></i>
            </div>
            <h2>Betal og få din mad leveret</h2>
            <p>Betal kontant eller med kreditkort. Velbekomme!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
