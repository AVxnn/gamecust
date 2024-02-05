"use client";

import React from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";
import SettingsNavigation from "../../../../components/legendary/MiddleBlock/SettingsNavigation";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Настройки | GameCust Новости из мира игр",
//   description: "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
//   openGraph: {
//     title: "GameCust | Настройки",
//     description: "Настройки | GameCust",
//     url: "https://gamecust.ru/categories",
//     siteName: "GameCust",
//     images: [
//       {
//         url: "/mstile-150x150.png",
//         width: 150,
//         height: 150
//       }
//     ]
//   }
// }

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}></div>
        <div className={styles.middleColumn}>{children}</div>
        <div className={styles.rightColumn}>
          <SettingsNavigation />
        </div>
      </div>
    </>
  );
};

export default observer(LayoutPages);
