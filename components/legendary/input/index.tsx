import React, { useState } from "react";
import styles from "./input.module.scss";

const Input = ({ children, icon, type, size, full, ...props }: any) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`${styles.containerInput}`}>
      {children && <span className={styles.title}>{children}</span>}
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        className={`${styles.search} ${focus && styles.active} ${
          size == "big" ? styles.big : size == "small" ? styles.small : ""
        }`}
        {...props}
      />
    </div>
  );
};

export default Input;
