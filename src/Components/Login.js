import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Form.css";
import GoogleLoginHandler from "./GoogleLoginHandler";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("loginEmail", emailRef.current.value);
      history.push("/cart");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="form-container">
        <div className="form-content-right">
          <form onSubmit={handleSubmit} className="form">
            <h1>Log In</h1>
            {error && <Alert style={{ color: "red" }}>{error}</Alert>}

            <div className="form-inputs" id="email">
              {" "}
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                ref={emailRef}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-inputs" id="password">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                autocomplete="current-password"
                ref={passwordRef}
                required
                placeholder="Enter your password"
              />
            </div>
            <button disabled={loading} className="form-input-btn" type="submit">
              Log In
            </button>

            <span className="form-input-login">
              Mangler du en konto?{" "}
              <Link className="loginlink" to="/sign-up">
                Sign up{" "}
              </Link>
            </span>
            <span className="form-input-login">- Eller -</span>
            <br></br>
            <GoogleLoginHandler />
          </form>
        </div>
      </div>
    </>
  );
}
