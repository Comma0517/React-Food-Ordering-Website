import React, { useEffect, useState } from "react";
export const UserContext = React.createContext();
export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(() =>
    getLocalStorage("user", getLocalStorage("user"))
  );
  function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // catch possible errors:
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
  }

  function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
  }
  useEffect(() => {
    setLocalStorage("user", currentUser);
  }, [currentUser]);
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
