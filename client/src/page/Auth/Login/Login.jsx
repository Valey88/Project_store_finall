import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAppDispatch } from "../../../redux/store";
import { loginUser } from "../../../redux/authSlice";
import style from "./Auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const login = async () => {
    console.log({
      email,
      password,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        }
      );

      const { data } = response;

      // Assuming the response contains a token
      localStorage.setItem("token", data.token);

      setEmail("");
      setPassword("");

      dispatch(loginUser()); // Dispatch action to update user authentication state

      const jwtToken = data.token;
      const decodedToken = JSON.parse(atob(jwtToken.split(".")[1])); // Decode JWT token payload
      const userRole = decodedToken.role;

      if (userRole === "Admin") {
        window.location.href = "/Admin"; // Redirect to admin page if user is an admin
      } else {
        window.location.href = "/account"; // Redirect to account page for regular users
      }
    } catch (error) {
      console.log("Error:", error);
      // Handle login error
    }
  };

  return (
    <div className={style.Auth}>
      <div className={style.container}>
        <form className={style.Auth_form}>
          <div className={style.Auth_nav}>
            <Link to="/login">Login</Link>
            <Link to="/registration">Create Account</Link>
          </div>
          <div>
            <h2>WELCOME BACK</h2>
            <p>
              Sign into your existing account to earn rewards, check existing
              orders and more
            </p>
          </div>
          <div className={style.Auth_form_input}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              login();
              e.preventDefault();
            }}
          >
            🚀 Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
