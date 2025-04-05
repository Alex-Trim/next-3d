import React from "react";
import styles from "./Interactive.module.scss";
export const Interactive = () => {
  return (
    <section className={styles.interactive} id="interactive">
      <div className={styles.interactive__container}>
        <p className={styles.interactive__text}>Press the buttons 1,2,3,4</p>
      </div>
    </section>
  );
};
