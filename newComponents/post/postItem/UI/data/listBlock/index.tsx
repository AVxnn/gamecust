import React from "react";
import styles from "./listBlock.module.scss";
import Spoiler from "../../Spoiler";

const ListBlock = ({ item }: any) => {
  return item.typeList === "ul" ? (
    <div className={styles.container}>
      <ul
        key={item.value}
        className={styles.listBlock}
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></ul>
      <Spoiler item={item}/>
    </div>
    
  ) : (
    <div>
      <ol
        key={item.value}
        className={styles.listBlock}
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></ol>
      <Spoiler item={item}/>
    </div>
    
  );
};

export default ListBlock;
