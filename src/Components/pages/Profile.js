import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import ImgBg from "../../images/foodimage2.jpg";
export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      localStorage.removeItem("loginEmail");
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <img
        src={ImgBg}
        class="img-fluid mx-auto d-block"
        alt="Responsive image"
      ></img>
      <div className="profile__container">
        <div className="profile__info">
          <div className="profile__info__wrapper"></div>
        </div>
        <div className="profile__wrapper">
          <h1 className="profile__header">Profil</h1>
          {error && <alert variant="danger">{error}</alert>}
          <h2 className="profile__item">Navn:</h2>
          <h2 className="profile__item">
            Email: {localStorage.getItem("loginEmail")}
          </h2>
          <h2 className="profile__item">Telefon nummer:</h2>
          <button className="profile__button">Updatér profil</button>
          <button onClick={handleLogout} className="profile__button">
            Log ud
          </button>
        </div>
      </div>
    </>
  );
}
