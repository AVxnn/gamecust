"use client";

import React from "react";
import styles from "./page.module.scss";
import ProfileBlock from "../../../../../components/legendary/MiddleBlock/ProfileBlock";
import SettingsNavigation from "../../../../../components/legendary/MiddleBlock/SettingsNavigation";

const PageRes = (props: any) => {
  return (
    <>
      <div className={styles.desktop}>
        <ProfileBlock />
      </div>
      <div className={styles.mobile}>
        <SettingsNavigation />
      </div>
    </>
  );
};

export default PageRes;
