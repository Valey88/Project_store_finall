import React from "react";
import style from "./HomeSection6.module.css";
import { useLoginUserMutation } from "../../../redux/dataApi";
import { useState } from "react";
const HomeSection6 = () => {
  const [loginUser] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    console.log({
      email,
      password,
    });
    if (email && password) {
      await loginUser({
        email,
        password,
      })
        .unwrap()
        .then((data) => {
          // onSuccess handler - handle successful response data here
          localStorage.setItem("token", data.token);
          setEmail("");
          setPassword("");
        });
    }
  };
  return (
    <div className={style.HomeSection6}>
      <form action="">
        <div className={style.form_text}>
          <h2>Don't miss your chance to get free Giveaway</h2>
          <h2>Sing up to our newsletter</h2>
          <p>
            We will inform you about coming Giveaways, Offers, Online Store
            preparation progress and start of sales
          </p>
        </div>
        <div className={style.formLogin}>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <div className={style.formButton}>
          <button onClick={login}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default HomeSection6;
