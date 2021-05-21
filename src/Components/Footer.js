import React from "react";
import "./Footer.css";
import { Button } from "./Buttons/Button";
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

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Om os</h2>
          </div>
          <div className="footer-link-items">
            <h2>
              <Link to="/ContactUs">Kontakt os</Link>
            </h2>
            <Link to="/ContactUs">Kontakt</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videoer</h2>
            <p className="text-light">På vej..</p>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              SaveAMeal
              <i className="fas fa-utensils" />
            </Link>
          </div>
          <small className="website-rights">Martin Lykke © 2021</small>
          <small className="website-rights">
            Made with React <i className="fab fa-react"></i>
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>

            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
