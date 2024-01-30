import React from "react";
import styles from "./title.module.scss";

const Title = ({ text }: any) => {
  return (
    <h1
      key={text}
      className={styles.title}
      dangerouslySetInnerHTML={{ __html: text }}
    ></h1>
  );
};

export default Title;
