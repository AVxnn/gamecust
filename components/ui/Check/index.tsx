import React from "react";
import styles from "./Check.module.scss";

const Check = ({ text }: any) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} id={text} type="checkbox" />
      <label className={styles.text} htmlFor={text}>
        {text}
      </label>
    </div>
  );
};

export default Check;
