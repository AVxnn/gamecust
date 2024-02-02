"use client";

import { useParams } from "next/navigation";
import React from "react";
import styles from "./search.module.scss";
import SearchComponent from "../../../../../newComponents/search";

const PageSearch = () => {
  return (
    <div className={styles.search}>
      <SearchComponent />
    </div>
  );
};

export default PageSearch;
