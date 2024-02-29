import React from "react";
import styles from "./subtitle.module.scss";
import Spoiler from "../../Spoiler";

const SubTitle = ({ item }: any) => {
  return (
    <div className={styles.container}>
      
      <h2
        key={item.value}
        className={styles.subtitle}
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></h2>
      <Spoiler item={item}/>
    </div>
  );
};

export default SubTitle;
