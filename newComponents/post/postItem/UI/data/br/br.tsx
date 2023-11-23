import React from "react";
import styles from "./br.module.scss"

const Br = () => {
  return (
    <div className={styles.container}>
      <div className={styles.br}>
        <div className={styles.oval}></div>
        <div className={styles.oval}></div>
        <div className={styles.oval}></div>
      </div>
    </div>
  );
};

export default Br;
