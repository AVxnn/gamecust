import React, { useEffect, useState } from "react";
import styles from "./ChangeColorBackground.module.scss";
import Check from "../../../../../../public/img/svg/Check";
import changeTheme from "../../../../../../features/ChangeTheme";

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
  const [theme, setTheme] = useState(localStorage.getItem("Theme"));

  const changeThemeHandler = (value: any) => {
    changeTheme(value);
    setTheme(value);
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
