import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useForm from "./UseForm";
import "./Form.css";
import GoogleLoginHandler from "./GoogleLoginHandler";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, loading, error } =
    useForm(submitForm);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>Opret konto</h1>
        {error && <Alert style={{ color: "red" }}>{error}</Alert>}
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            autocomplete="new-password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            autocomplete="new-password"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button disabled={loading} className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Har du allerede en konto?{" "}
          <Link className="loginlink" to="/login">
            Log ind{" "}
          </Link>
        </span>
        <span className="form-input-login">- Eller -</span>
        <GoogleLoginHandler />
      </form>
    </div>
  );
};

export default FormSignup;
