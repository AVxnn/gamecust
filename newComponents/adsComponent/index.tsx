import React, { useEffect, useState } from "react";
import styles from "./adsComponent.module.scss";

const AdsComponent = () => {
  // const [ads, setAds] = useState(localStorage?.getItem("ads"));

  // useEffect(() => {
  //   setAds(localStorage.getItem("ads"));
  // }, [localStorage]);

  return (
    <>
      <div className={styles.ads}>
        Не нашли нужную категорию? <br /> Напиши мне в телеграме @romashkog
      </div>
    </>
  );
};

export default AdsComponent;
