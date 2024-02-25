import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({
  title,
  value,
  setValue,
  click,
  defaultValue = "",
  maxValue = 128,
}: any) => {
  const changeHandler = (value: any) => {
    if (value.length > maxValue) {
    } else {
      setValue(value);
    }
  };

  return (
    <>
      <div className={styles.newInput}>
        <p className={styles.title}>{title}</p>
        <div className={styles.container}>
          <textarea
            className={styles.input}
            onChange={(e) => changeHandler(e.currentTarget.value)}
          >{value}</textarea>
          {maxValue !== 128 ? (
            <span className={styles.maxValue}>{maxValue - value?.length}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default TextArea;
