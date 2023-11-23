"use client";

import React from "react";
import styles from "./layout.module.scss";
import Header from "../../newComponents/header";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
};

export default LayoutPages;
