import React from "react";
import styles from "./Tag.module.scss";
import Star from "../../../../public/img/svg/Star";

const Tag = ({ data }: any) => {
  const createTag = () => {
    switch (data.type) {
      case "popular":
        return (
          <div className={`${styles.tag} ${styles.important}`}>
            <Star />
            <span>{data.text}</span>
          </div>
        );
      case "postday":
        return (
          <div className={`${styles.tag} ${styles.postDay}`}>
            <span>{data.text}</span>
          </div>
        );
    }
  };

  return <div className={styles.tag}>{createTag()}</div>;
};

export default Tag;
