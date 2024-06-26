"use client";

import React, { useEffect } from "react";
import styles from "../page.module.scss";
import CategoriesList from "../../../../../newComponents/categoriesList";

const PageRes = (props: any) => {
  useEffect(() => {
    document.body.setAttribute("ads", "");
    localStorage.setItem("ads", "categories");

    return () => {
      document.body.removeAttribute("ads");
      localStorage.removeItem("ads");
    };
  }, []);

  return (
    <>
      <div className={styles.main}>
        <CategoriesList />
      </div>
    </>
  );
};

export default PageRes;
