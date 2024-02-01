import React from "react";
import styles from "./subtitle.module.scss";

const SubTitle = ({ text }: any) => {
  return (
    <h2
      key={text}
      className={styles.subtitle}
      dangerouslySetInnerHTML={{ __html: text }}
    ></h2>
  );
};

export default SubTitle;
