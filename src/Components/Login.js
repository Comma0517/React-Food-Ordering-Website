import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { Link, useHistory } from "react-router-dom";

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
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <div className="form-container">
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert style={{ color: "red" }}>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

      <div className="form-container">
        <div className="form-content-right">
          <form onSubmit={handleSubmit} className="form">
            <h1>Log ind</h1>
            {error && <Alert style={{ color: "red" }}>{error}</Alert>}
            <div className="form-inputs">
              <label className="form-label" ref={emailRef}>
                Email
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label" ref={passwordRef}>
                Password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
              />
            </div>
            <button disabled={loading} className="form-input-btn" type="submit">
              Log ind
            </button>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Jeg har glemt mit password</Link>
            </div>
            <span className="form-input-login">
              Ny på Food? <a href="/sign-up">Opret konto</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
