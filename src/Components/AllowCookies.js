import React, { useEffect, useState } from "react";

function AllowCookies() {
  const [showComp, setShowComp] = useState(() =>
    getLocalStorage("showCookiesPrompt", true)
  );

  const onClick = () => setShowComp(false);
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
    setLocalStorage("showCookiesPrompt", showComp);
  }, [showComp]);
  return (
    <div>
      {showComp && (
        <div className="fixed-bottom">
          <div className="d-flex justify-content-center ">
            <div className="">
              <div className="col-md-12">
                <div className="d-flex flex-row justify-content-between align-items-center card cookie p-3">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      alt="cookie"
                      src="https://i.imgur.com/Tl8ZBUe.png"
                      width="40"
                    />
                    <div className="ml-4 mr-4">
                      <span>
                        Vi bruger cookies til at personalisere indhold og
                        analysere sitets trafik.
                        <br />
                      </span>
                      <a className="learn-more" href="/">
                        Se mere<i className="fa fa-angle-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={onClick}
                      className="btn btn-dark"
                      type="button"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllowCookies;
