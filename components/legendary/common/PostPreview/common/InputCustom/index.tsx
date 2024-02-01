import React, { useState } from "react";
import styles from "./InputCustom.module.scss";
import Eye from "../../../../../../public/img/svg/Eye";

const InputCustom = ({
  value,
  statusBar,
  onChange,
  error,
  type,
  ...props
}: any) => {
  const [focus, setFocus] = useState<boolean>(false);

  const [typeS, setTypeS] = useState<string>(type);

  return (
    <div
      className={styles.formInput}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <input
        className={`${styles.input} ${error && !focus ? styles.error : ""}`}
        onChange={onChange}
        value={value}
        type={typeS}
        {...props}
      />
      {error && !focus ? <span className={styles.errorText}>{error}</span> : ""}
      {type === "password" ? (
        <div
          className={styles.eye}
          onClick={() =>
            typeS === "password" ? setTypeS("text") : setTypeS("password")
          }
        >
          <Eye />
        </div>
      ) : (
        ""
      )}
      {type === "password" && statusBar && focus ? (
        <div className={styles.line}>
          <div
            className={styles.activeLine}
            style={{ backgroundColor: "#9E5BF0", width: `${statusBar}%` }}
          ></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputCustom;
