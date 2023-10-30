import React from "react";
import styles from "./FirstBlockComm.module.scss";

const FirstBlockComm = () => {
  return (
    <div className={styles.firstBlockComm}>
      <p>Создайте ваше первое сообщество</p>
      <span>Доступно: 1</span>
      <div className={styles.circle}></div>
    </div>
  );
};

export default FirstBlockComm;
