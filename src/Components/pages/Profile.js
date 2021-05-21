import React, { useContext, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";
import ImgBg from "../../images/foodimage2cropped.jpg";
import { LogOut } from "react-feather";
import { UserContext } from "../../Contexts/UserContext";
export default function Profile() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  const [, setCurrentUser] = useContext(UserContext);
  async function handleLogout() {
    setError("");
    try {
      await logout();
      setCurrentUser();
      localStorage.removeItem("loginEmail");
      localStorage.removeItem("loginImg");
      localStorage.removeItem("loginFullname");
      localStorage.removeItem("loginFirstName");
      localStorage.removeItem("loginLastname");
      history.push("/login");
    } catch {
      setError("Kunne ikke logge ud.");
    }
  }
  function getGreeting() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      return "Godmorgen";
    } else if (curHr < 18) {
      return "God eftermiddag";
    } else {
      return "God aften";
    }
  }

  return (
    <>
      <div>
        <img src={ImgBg} className="w-100 " alt="foodBackground"></img>
      </div>
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="mt-5">
          <div className="text-center">
            <img
              className="rounded-circle text-center"
              src={localStorage.getItem("loginImg")}
              alt="profilePicture"
            ></img>
            <h3 className="text-center">
              {getGreeting()}, {localStorage.getItem("loginFirstName")}
            </h3>
            {error && <alert variant="danger">{error}</alert>}
            <p className="text-center text-secondary">Føler du dig sulten?</p>
            <Link to="/" className="btn btn-primary">
              Gå til menuen
            </Link>
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
