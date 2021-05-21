import React from "react";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        class="spinner-border text-primary "
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span class="sr-only"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
