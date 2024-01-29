import React from "react";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.list}>
      {[0, 1, 2, 3, 4].map((item: any, index: number) => {
        return (
          <div key={index} className={styles.post}>
            <div className={styles.header}>
              <div className={styles.avatar}>
                <div className={styles.ava}></div>
                <div className={styles.info}></div>
              </div>
              <div className={styles.sub}></div>
            </div>
            <div className={styles.info}>
              <div className={styles.text}></div>
              <div className={styles.image}></div>
            </div>
            <div className={styles.toolbar}>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
