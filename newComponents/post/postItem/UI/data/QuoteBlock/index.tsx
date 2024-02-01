import React from "react";
import styles from "./QuoteBlock.module.scss";

const QuoteBlock = ({ item }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.slash}></div>
      <p
        key={item.value}
        className={styles.inputText}
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></p>
      <span
        key={item.author}
        className={styles.inputAuthor}
        dangerouslySetInnerHTML={{ __html: item.author }}
      ></span>
    </div>
  );
};

export default QuoteBlock;
