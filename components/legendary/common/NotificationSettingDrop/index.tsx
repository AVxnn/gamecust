import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./NotificationSettingDrop.module.scss";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../app/(pages)/layout";
import Dots from "../../../../public/img/svg/Dots";
import Mail from "../../../../public/img/auth/mail";
import Cog from "../../../../public/img/svg/Cog";
import { ViewNotifications } from "../../../../features/new/Notification/ViewNotifications/ViewNotifications";

const NotificationSettingDrop = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const Button = useRef<HTMLDivElement>(null);

  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);

  const deleteHandler = (e: any) => {
    e.preventDefault();
    notificationStore.addItem({
      title: "Пост удален",
      status: "success",
      timeLife: 2500,
    });
  };
  const viewHandler = async (e: any) => {
    e.preventDefault();
    notificationStore.addItem({
      title: "Уведомления прочитаны",
      status: "success",
      timeLife: 2500,
    });
    if (mobxStore.user.id) {
      await ViewNotifications(mobxStore.user.id);
    }
  };

  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const handleClickOutside = (e: any) => {
    if (isDropOpen) {
      if (
        labelRef.current &&
        !labelRef.current.contains(e.target) &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setIsDropOpen(false);
      }
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined" && isDropOpen) {
      document.addEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  return (
    <div
      ref={Button}
      className={`${styles.container} ${isDropOpen ? styles.active : ""}`}
    >
      <button
        ref={labelRef}
        onClick={() => setIsDropOpen(!isDropOpen)}
        className={styles.button}
      >
        <Dots />
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isDropOpen && (
          <motion.div
            exit={{ opacity: 0, top: 54 }}
            initial={{ opacity: 0, top: 54 }}
            animate={{ opacity: 1, top: 30 }}
            ref={popupRef}
            className={styles.dropMenu}
          >
            <div onClick={(e) => viewHandler(e)} className={styles.dropItem}>
              <Mail />
              <span>Прочитать все уведомления</span>
            </div>
            <div onClick={(e) => deleteHandler(e)} className={styles.dropItem}>
              <Cog />
              <span>Настройки уведомлений</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default observer(NotificationSettingDrop);
