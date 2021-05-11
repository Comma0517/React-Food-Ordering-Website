import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem("loginEmail") !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
