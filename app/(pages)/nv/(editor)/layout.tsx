"use client";

import React from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.middleColumn}>
          {children}
        </div>
        <div className={styles.rightColumn}>
        </div>
      </div>
    </>
  );
};

export default observer(LayoutPages);
