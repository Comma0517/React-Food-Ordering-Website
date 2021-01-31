import React, { useState } from "react";
import FormSuccess from "../FormSuccess";
import SignupForm from "../SignupForm";
import "./Signup.css";

function Signup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="/images/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}

export default Signup;
