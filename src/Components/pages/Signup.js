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
        <SignupForm submitForm={submitForm} />
      </div>
    </>
  );
}

export default Signup;
