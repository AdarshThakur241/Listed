import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please enter email and password");
    } else {
      setErrorMessage("");
      console.log(`Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <div className="login-page">
      <div className="left-half">
        <p className="center">
        Board.
        </p>
        </div>
      <div className="right-half">
        <h1>Sign in</h1>
        <h2>Sign in to your account</h2>
        <div className="but">
          <button className="google-button">Sign in with Google</button>
          <button className="apple-button">Sign in with Apple</button>
        </div>
        <form onSubmit={handleSubmit} className="card">
          <label>
            Email Address:
          <div className="email">
            
            <input type="email" name="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            </div>  
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
          </label>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button type="submit">Sign in</button>
        </form>
        <div className="register-link">
          Don't have an account? <a href="#">Register here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
