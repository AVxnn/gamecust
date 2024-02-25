import React from "react";
import styles from "./loading.module.scss";
import Loader from "../../../loader";

const Loading = () => {
  return (
    <div className={styles.list}>
      <div className={styles.post}>
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
