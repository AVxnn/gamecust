import React from "react";
import styles from "./popup.module.scss";

const Popup = ({ isOpen, setIsOpen, children }: any) => {
  return isOpen ? (
    <div className={styles.popup}>
      {" "}
      <p></p> {children}
    </div>
  ) : null;
};

export default Popup;
