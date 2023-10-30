import React from "react";
import styles from "./TitleCard.module.scss"

const TitleCard = ({title} : any) => {
  return <div className={styles.titleCard}>{title}</div>;
};

export default TitleCard;
