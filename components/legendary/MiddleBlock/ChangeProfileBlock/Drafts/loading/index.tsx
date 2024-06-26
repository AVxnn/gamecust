import React from "react";
import styles from "./loading.module.scss";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className={styles.list}>
      <div className={styles.post}>
        <div className={styles.header}>
          <Skeleton
            className={styles.borderR}
            width={"200px"}
            height={"120px"}
          ></Skeleton>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"50%"}
            height={"24px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"50%"}
            height={"24px"}
          ></Skeleton>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <Skeleton
            className={styles.borderR}
            width={"200px"}
            height={"120px"}
          ></Skeleton>
        </div>
        <div className={styles.info}>
          <Skeleton
            className={styles.borderR}
            width={"50%"}
            height={"24px"}
          ></Skeleton>
          <Skeleton
            className={styles.borderR}
            width={"50%"}
            height={"24px"}
          ></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Loading;
