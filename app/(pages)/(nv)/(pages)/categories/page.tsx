"use client"

import React from "react";
import styles from "../page.module.scss";
import CategoriesList from "../../../../../newComponents/categoriesList";

const PageRes = (props: any) => {
  return (
    <div className={styles.main}>
      <CategoriesList />
    </div>
  );
};

export default PageRes;
