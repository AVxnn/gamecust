import React from 'react';
import styles from './Counter.module.scss'
import Arrow from "../../../../../../public/img/svg/Arrow";

const Counter = ({data} : any) => {
  return (
    <div className={styles.counter}>
      <div className={styles.dislike}>
        <Arrow />
      </div>
        <div className={styles.like}>
            <Arrow />
        </div>
      <span className={styles.title}>{data?.likes?.length}</span>
    </div>
  );
};

export default Counter;
