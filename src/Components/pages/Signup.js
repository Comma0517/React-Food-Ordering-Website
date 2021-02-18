import React, { useState } from "react";
import SignupForm from "../SignupForm";
import "./Signup.css";

function Signup() {
  // eslint-disable-next-line
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <SignupForm submitForm={submitForm} />
      </div>
    </>
  );
}

export default Signup;
