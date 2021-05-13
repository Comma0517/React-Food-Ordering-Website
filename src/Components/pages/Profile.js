import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import ImgBg from "../../images/foodimage2cropped.jpg";
import { LogOut } from "react-feather";
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
  function getGreeting() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      return "good morning";
    } else if (curHr < 18) {
      return "Good Afternoon";
    } else {
      return "good evening";
    }
  }

  return (
    <>
      <div>
        <img src={ImgBg} className="w-100 "></img>
      </div>
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="mt-5">
          <div className="text-center">
            <img
              className="rounded-circle text-center"
              src={localStorage.getItem("loginImg")}
            ></img>
            <h3 className="text-center">
              {getGreeting()}, {localStorage.getItem("loginFullname")}
            </h3>
            {error && <alert variant="danger">{error}</alert>}
            <p className="text-center text-secondary">
              {localStorage.getItem("loginEmail")}
            </p>
            <div className="mt-5 text-center">
              <button
                onClick={handleLogout}
                type="button"
                className="btn btn-outline-danger border border-danger mt-5 mb-2"
              >
                Log ud <LogOut size={18}></LogOut>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
