import React from "react";
import styles from "./NewInput.module.scss";

const NewInput = ({
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
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(e) => changeHandler(e.currentTarget.value)}
          />
          {maxValue && maxValue !== 128 ? (
            <span className={styles.maxValue}>
              {maxValue - (value ? value?.length : 0)}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default NewInput;
