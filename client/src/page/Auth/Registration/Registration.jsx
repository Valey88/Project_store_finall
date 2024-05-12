import React from "react";
import { useState } from "react";
import { useRegisterUserMutation } from "../../../redux/dataApi";
import { Link } from "react-router-dom";
import style from "./Auth.module.css";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sureName, setSureName] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registration] = useRegisterUserMutation();
  const reg = async () => {
    console.log({
      sureName,
      name,
      middleName,
      email,
      phoneNumber,
      password,
    });
    if (sureName && name && middleName && email && phoneNumber && password) {
      await registration({
        sureName,
        name,
        middleName,
        email,
        phoneNumber,
        password,
      })
        .unwrap()
        .then((data) => {
          // onSuccess handler - handle successful response data here
          localStorage.setItem("token", data.token);
          setSureName("");
          setName("");
          setMiddleName("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
        })
        .catch((error) => {
          console.error("Registration error:", error);
          // Handle error if needed
        });
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
            <h2>NEW TO IHARMONY HUB?</h2>
            <p>Create a new account</p>
          </div>
          <div className={style.Auth_form_input}>
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              value={sureName}
              placeholder="Фамилия"
              onChange={(e) => setSureName(e.target.value)}
            />
            <input
              type="text"
              value={name}
              placeholder="Имя"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={middleName}
              placeholder="Очество"
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <input
              type="text"
              value={phoneNumber}
              placeholder="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button onClick={reg}>Регистрация</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
