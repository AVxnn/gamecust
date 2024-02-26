import React from "react";
import styles from "./layout.module.scss";
import NavigationLayout from "../../../../newComponents/navigation/navigationLayout";
import CreateButton from "../../../../newComponents/createButton";
import Contacts from "../../../../components/legendary/RightBlock/Contacts";
import TopUsers from "../../../../components/legendary/RightBlock/TopUsers";

import { Metadata } from "next";
import MobileNavigation from "../../../../components/legendary/mobileNavigation";

export const metadata: Metadata = {
  title: "Популярное | GameCust Новости из мира игр",
  description:
    "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
  openGraph: {
    title: "GameCust | Популярное",
    description: "Популярное | GameCust",
    url: "https://gamecust.ru/categories",
    siteName: "GameCust",
    images: [
      {
        url: "/mstile-150x150.png",
        width: 150,
        height: 150,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
};

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <NavigationLayout />
          <CreateButton />
        </div>
        <div className={styles.middleColumn}>
          <MobileNavigation />
          {children}
        </div>
        <div className={styles.rightColumn}>
          {/* <Premium /> */}
          <TopUsers />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default LayoutPages;
