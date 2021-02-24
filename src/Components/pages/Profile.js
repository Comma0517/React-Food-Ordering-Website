import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <>
      <div className="profile__container">
        <div className="profile__wrapper">
          <h1 className="profile__header">Profil</h1>
          <h2 className="profile__item">
            Email: {localStorage.getItem("loginEmail")}
          </h2>
          <button className="profile__button">Updatér profil</button>
          <button className="profile__button">Log ud</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
