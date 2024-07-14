"use client";

import React, { useEffect, useState } from "react";
import styles from "./ChangeColorBackground.module.scss";
import Check from "../../../../../../public/img/svg/Check";
import changeTheme from "../../../../../../features/ChangeTheme";
import { useTheme } from "next-themes";

let colors = [
  {
    value: "Светлая",
    type: "white",
  },
  {
    value: "Темная",
    type: "dark",
  },
];

const ChangeColorBackground = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = (value: any) => {
    console.log(theme);
    if (value == "white") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Выбери фон сайта</p>
      <div className={styles.content}>
        {colors.map((item: any, index: any) => {
          return (
            <div
              key={index}
              onClick={() => changeThemeHandler(item.type)}
              className={`${styles.round} ${styles[item.type]} ${
                theme === item.type && styles.roundActive
              }`}
            >
              <Check />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChangeColorBackground;
