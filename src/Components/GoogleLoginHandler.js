import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import { useLocation } from "react-router-dom";

function GoogleLoginHandler() {
  const [, setCurrentUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const returnSuccess = (response) => {
    setCurrentUser(response.profileObj.name);
    localStorage.setItem("loginEmail", response.profileObj.email);
    localStorage.setItem("loginImg", response.profileObj.imageUrl);
    localStorage.setItem("loginFullname", response.profileObj.name);
    localStorage.setItem("loginFirstName", response.profileObj.givenName);
    localStorage.setItem("loginLastName", response.profileObj.familyName);
    let path = location.pathname;
    if (path === "/login") {
      history.push("/cart");
    }
  };
  const returnFail = (response) => {
    console.log("error");
    alert("Enable cookies for the website to work properly.");
  };

  return (
    <div>
      <GoogleLogin
        clientId="713813805970-crgp3o2j0pttk94tctgslv0nr1hiiu9e.apps.googleusercontent.com"
        buttonText="Log ind med Google"
        onSuccess={returnSuccess}
        onFailure={returnFail}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default GoogleLoginHandler;
