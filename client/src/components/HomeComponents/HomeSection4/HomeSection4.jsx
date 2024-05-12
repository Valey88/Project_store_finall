import React from "react";
import style from "./HomeSection4.module.css";
const HomeSection4 = () => {
  return (
    <div className={style.HomeSection4}>
      <div className={style.section4Container}>
        <div>
          <img src="../../../public/Volumenzeit_M-25 1.png" alt="" />
        </div>
        <div className={style.section4Text}>
          <h2>Our Mission</h2>
          <div className={style.sectionDiscription}>
            <p>
              We have invested 6 year of our lifes to invent a new technology of
              production a 3D dials with quality of wristwatch industry. All
              what we need to turn on our imagination on maximum.
            </p>
          </div>
          <div className={style.sectionDiscription}>
            <p>
              We love Out-of-the-box designs and believe there are many people
              who thinks the same.
            </p>
          </div>
          <button>Design Your Watch</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
