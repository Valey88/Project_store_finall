import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerContent}>
        <Link to="/" className={style.logo}>
          iHarmony Hub
        </Link>
      </div>
    </div>
  );
};

export default Footer;
