import React, { useState } from "react";
import styles from "./notificationItem.module.scss";
import Image from "next/image";
import Heart from "../../../../public/img/svg/Heart";
import Mark from "../../../../public/img/svg/Mark";
import Chat from "../../../../public/img/svg/Chat";
import Ghost from "../../../../public/img/svgIcons/Ghost";
import People from "../../../../public/img/svg/People";
import Close from "../../../../public/img/svg/close";
import { deleteNotification } from "../../../../features/new/getNotifications/getNotifications";

export const CheckIcon = ({ status }: any) => {
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
    case "follow":
      return (
        <div className={`${styles.iconBlock} ${styles.info}`}>
          <People />
        </div>
      );
  }
  return null;
};

const NotificationItem = ({ item }: any) => {
  const [hover, setHover] = useState(false);
  const deleteNtf = () => {
    deleteNotification(item._id);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => deleteNtf()}
      className={`${styles.notification} ${
        !item.viewed ? styles.viewed : null
      }`}
    >
      <div className={styles.mainBlock}>
        <div className={styles.avatar}>
          <Image layout={"fill"} src={item.user.avatarPath} alt={"avatar"} />
        </div>
        <CheckIcon status={item.status} />
        <div className={styles.infoText}>
          <p className={styles.name}>{item.user.username}</p>
          <span className={styles.subtitle}>{item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
