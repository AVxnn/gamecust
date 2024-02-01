import React from "react";
import styles from "./listBlock.module.scss";

const ListBlock = ({ item }: any) => {
  return item.typeList === "ul" ? (
    <ul
      key={item.value}
      className={styles.listBlock}
      dangerouslySetInnerHTML={{ __html: item.value }}
    ></ul>
  ) : (
    <ol
      key={item.value}
      className={styles.listBlock}
      dangerouslySetInnerHTML={{ __html: item.value }}
    ></ol>
  );
};

export default ListBlock;
