"use client";

import React from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";
import NavigationLayout from "../../../../newComponents/navigation/navigationLayout";
import CreateButton from "../../../../newComponents/createButton";
import Premium from "../../../../components/legendary/RightBlock/Premium";
import Contacts from "../../../../components/legendary/RightBlock/Contacts";
import Profile from "../../../../newComponents/profile";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <NavigationLayout />
          <CreateButton />
        </div>
        <div className={styles.middleColumn}>
          <Profile />
          {children}
        </div>
        <div className={styles.rightColumn}>
          <Premium />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default observer(LayoutPages);
