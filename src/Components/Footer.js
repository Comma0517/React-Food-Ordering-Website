import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const link = "https://www.linkedin.com/in/martin-holt-lykke/";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Abonnér og få gode tilbud om mad i din indbakke
        </p>
        <p className="footer-subscription-text">
          Du kan afmelde lige når du vil
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Din Email"
            />
            <Button buttonStyle="btn--outline">Abonnér</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Om os</h2>
            <Link to="/sign-up">Hvordan det virker</Link>
            <Link to={link}>Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Kontakt os</h2>
            <Link to={link}>Kontakt</Link>
            <Link to={link}>Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videoer</h2>
            <Link to={link}>På vej..</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              SaveAMeal
              <i class="fas fa-utensils" />
            </Link>
          </div>
          <small class="website-rights">Martin Lykke © 2021</small>
          <small class="website-rights">
            Made with React <i class="fab fa-react"></i>
          </small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link twitter"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>

            <a
              class="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
