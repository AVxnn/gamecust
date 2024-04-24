"use client"

import React, { useEffect, useState } from "react";
import styles from "./ChangeColorTheme.module.scss";
import Check from "../../../../../../public/img/svg/Check";

let dataBlog = [
  {
    value: "Красный",
    type: "red",
  },
  {
    value: "Синий",
    type: "blue",
  },
  {
    value: "Желтый",
    type: "yellow",
  },
  {
    value: "Фиолетовый",
    type: "purple",
  },
  {
    value: "Оранжевый",
    type: "orange",
  },
  {
    value: "Зеленый",
    type: "green",
  },
];

const ChangeColorTheme = () => {
  const [mainColor, setMainColor] = useState();

  const changeColor = (value: any) => {
    document.body.removeAttribute("red");
    document.body.removeAttribute("blue");
    document.body.removeAttribute("yellow");
    document.body.removeAttribute("purple");
    document.body.removeAttribute("orange");
    document.body.removeAttribute("green");
    if (value == "red") {
      localStorage.setItem("color", "red");
      document.body.setAttribute("red", "");
    } else if (value == "blue") {
      localStorage.setItem("color", "blue");
      document.body.setAttribute("blue", "");
    } else if (value == "yellow") {
      localStorage.setItem("color", "yellow");
      document.body.setAttribute("yellow", "");
    } else if (value == "purple") {
      localStorage.setItem("color", "purple");
      document.body.setAttribute("purple", "");
    } else if (value == "orange") {
      localStorage.setItem("color", "orange");
      document.body.setAttribute("orange", "");
    } else if (value == "green") {
      localStorage.setItem("color", "green");
      document.body.setAttribute("green", "");
    }
    setMainColor(value);
  };

  useEffect(() => {
    let color = localStorage.getItem("color") || ("gamecust" as any);
    setMainColor(color);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Выбери акцентный цвет сайта</p>
      <div className={styles.content}>
        {dataBlog.map((item: any, index: any) => {
          return (
            <div
              key={index}
              onClick={() => changeColor(item.type)}
              className={`${styles.round} ${styles[item.type]} ${
                mainColor === item.type && styles.roundActive
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

export default ChangeColorTheme;
