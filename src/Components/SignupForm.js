import React from "react";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

import useForm from "./UseForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, loading, error } = useForm(
    submitForm
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
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
            type="password"
            name="password"
            placeholder="Enter your password"
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
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button disabled={loading} className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/login">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
