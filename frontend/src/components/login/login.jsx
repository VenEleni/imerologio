import React, { useState } from "react";
import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = { email, password };
      const res = await axios.post("http://localhost:8080/user/login", user);

      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }

    // Reset the Inputs
    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <div className={classes.Container}>
      <div className={classes.right}></div>
      <div className={classes.left}>
        <div className={classes.wrapper}>
          <h2 className={classes.loginText}>Login</h2>
          <form onSubmit={handleLogin}>
            <div className={classes.inputWrapper}>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                It must be a combination of minimum 8 letters, numbers and
                symbols.
              </p>
            </div>
            <div className={classes.checkboxandlink}>
              <a href="#">Forgot Password?</a>
              <div className={classes.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            </div>
            <button type="submit">Login</button>
          </form>

          <hr className={classes.hr} />
          <p>
            No account yet? <a href="register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
