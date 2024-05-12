import React from "react";
import style from "./HomeSection2.module.css";

const HomeSection2 = () => {
  return (
    <div className={style.HomeSection2}>
      <h1>Features</h1>
      <div className={style.Features}>
        <div className={style.FeatureImg}>
          <img src="../../../public/image 9.png" alt="" />
        </div>
        <div className={style.FeatureDiscription}>
          <div className={style.FeatureItem}>
            <div className={style.FeatureItemHeader}>
              <img src="/public/Group 857.png" alt="" />
              <h3>Features</h3>
            </div>
            <div className={style.FeatureItemDiscription}>
            <h4>Case Size: 42mm</h4>
              <h4>
                Case Color: Silver, Black, Blue, chamfered brush with mirror
                polish
              </h4>
              <h4>
                Dial Color: Black Metallic, Color shifting Blue-Purple,
                Green-Purple, Pink-Gold Water Resistance: 5 ATM/50 meters
              </h4>
              <h4>Straps: Quick release</h4>
              <p>Movement: Swiss Parts RONDA 762E</p>
              <p>Instantaneous rate -10/ +20 sec/month</p>
              <p>Standard Battery life: 10 years</p>
            </div>
          </div>
          <div className={style.FeatureItem}>
            <div className={style.FeatureItemHeader}>
              <img src="/public/Group 857.png" alt="" />
              <h3>Features</h3>
            </div>
            <div className={style.FeatureItemDiscription}>
              <h4>Case Size: 42mm</h4>
              <h4>
                Case Color: Silver, Black, Blue, chamfered brush with mirror
                polish
              </h4>
              <h4>
                Dial Color: Black Metallic, Color shifting Blue-Purple,
                Green-Purple, Pink-Gold Water Resistance: 5 ATM/50 meters
              </h4>
              <h4>Straps: Quick release</h4>
              <h4>Movement: Swiss Parts RONDA 762E</h4>
              <h4>Instantaneous rate -10/ +20 sec/month</h4>
              <h4>Standard Battery life: 10 years</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
