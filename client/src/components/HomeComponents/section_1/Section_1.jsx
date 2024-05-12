import React from "react";
import styles from "./Section_1.module.css";

export default function section_1() {
  return (
    <div className={styles.Section_1}>
      <div className={styles.Text_Container}>
        <h1>Find your dream watch</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi
          elementum commodo ipsum. Aenean aenean adipiscing lect
        </h3>
        <button>Design Your Iphone</button>
      </div>

      <img src="/public/iphone.png" alt="" className={styles.Image} />
    </div>
  );
}
