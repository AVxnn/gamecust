import React from "react";
import styles from "./description.module.scss"
import Spoiler from "../../Spoiler";

const Description = ({ item }: any) => {
  return (
    <div className={styles.container}>
      <h2
        key={item.value}
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></h2>
      <Spoiler item={item}/>
    </div>
  );
};

export default Description;
