import React from "react";
import style from "./Home.module.css";
import Section_1 from "../../components/HomeComponents/section_1/Section_1";
import HomeSection2 from "../../components/HomeComponents/Home_section2/HomeSection2";
import HomeSection3 from "../../components/HomeComponents/Home_Section3/HomeSection3";
import HomeSection4 from "../../components/HomeComponents/HomeSection4/HomeSection4";
import HomeSection5 from "../../components/HomeComponents/HomeSection5/HomeSection5";
import HomeSection6 from "../../components/HomeComponents/HomeSection6/HomeSection6";
const Home = () => {
  return (
    <div className={style.Home}>
      <div>
        <Section_1 />
      </div>
      <div>
        <HomeSection2 />
      </div>
      <div>
        <HomeSection3 />
      </div>
      <div>
        <HomeSection4 />
      </div>
      <div>
        <HomeSection5 />
      </div>
      <div>
        <HomeSection6 />
      </div>
    </div>
  );
};

export default Home;
