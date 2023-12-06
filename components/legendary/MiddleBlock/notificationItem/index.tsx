import React from "react";
import styles from "./notificationItem.module.scss";
import Image from "next/image";
import Heart from "../../../../public/img/svg/Heart";
import Mark from "../../../../public/img/svg/Mark";
import Chat from "../../../../public/img/svg/Chat";
import Ghost from "../../../../public/img/svgIcons/Ghost";

export const CheckIcon = ({ status }: any) => {
  console.log(status)
  switch (status) {
    case "like":
      return (
        <div className={`${styles.iconBlock} ${styles.like}`}>
          <Heart />
        </div>
      );
    case "comment":
      return (
        <div className={`${styles.iconBlock} ${styles.comment}`}>
          <Chat type={false} />
        </div>
      );
    case "mark":
      return (
        <div className={`${styles.iconBlock} ${styles.mark}`}>
          <Mark type={false} />
        </div>
      );
    case "info":
      return (
        <div className={`${styles.iconBlock} ${styles.info}`}>
          <Ghost />
        </div>
      );
  }
  return null
};

const NotificationItem = ({ item }: any) => {
  return (
    <div className={styles.notification}>
      <div className={styles.mainBlock}>
        <div className={styles.avatar}>
          <Image layout={"fill"} src={item.userAvatar} alt={"avatar"} />
        </div>
        <div className={styles.infoText}>
          <p className={styles.name}>{item.username}</p>
          <span className={styles.subtitle}>{item.description}</span>
        </div>
      </div>
      <CheckIcon status={item.status} />
    </div>
  );
};

export default NotificationItem;
