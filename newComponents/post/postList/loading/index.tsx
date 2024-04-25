import React from "react";
import styles from "./loading.module.scss";
import Loader from "../../../loader";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className={styles.list}>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton className={styles.ava} />
            <Skeleton count={1} className={styles.info} />
          </div>
          <Skeleton className={styles.sub} />
        </div>
        <div className={styles.info}>
          <Skeleton className={styles.text} />
          <Skeleton className={styles.image} />

          <Skeleton className={styles.text} />
        </div>
        <div className={styles.toolbar}>
          <Skeleton className={styles.left} />
          <Skeleton className={styles.right} />
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <Skeleton className={styles.ava} />
            <Skeleton count={1} className={styles.info} />
          </div>
          <Skeleton className={styles.sub} />
        </div>
        <div className={styles.info}>
          <Skeleton className={styles.text} />
          <Skeleton className={styles.image} />

          <Skeleton className={styles.text} />
        </div>
        <div className={styles.toolbar}>
          <Skeleton className={styles.left} />
          <Skeleton className={styles.right} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
