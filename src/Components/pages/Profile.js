import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import ImgBg from "../../images/foodimage2cropped.jpg";
export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      localStorage.removeItem("loginEmail");
      localStorage.removeItem("loginImg");
      localStorage.removeItem("loginFullname");
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <div>
        <img src={ImgBg} className="w-100 "></img>
      </div>
      <div className="container ">
        <div className="mt-5">
          <div className="text-center">
            <img
              className="rounded-circle text-center"
              src={localStorage.getItem("loginImg")}
            ></img>
            <h1 className="text-center">
              {localStorage.getItem("loginFullname")}
            </h1>
            {error && <alert variant="danger">{error}</alert>}
            <p className="text-center text-secondary">
              {localStorage.getItem("loginEmail")}
            </p>
            <div className="mt-5 text-center">
              <button onClick={handleLogout} className="profile__button">
                Log ud
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
