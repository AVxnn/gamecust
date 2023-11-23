import React from "react";
import styles from "./description.module.scss"

const Description = ({ text }: any) => {
  return (
    <h2
      key={text}
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: text }}
    ></h2>
  );
};

export default Description;
