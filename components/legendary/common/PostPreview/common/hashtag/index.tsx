import React from 'react';
import styles from "./hashtag.module.scss";

const HashTag = ({data} : any) => {
  return (
    <span className={styles.hashtag}>{data.title}</span>
  );
};

export default HashTag;
