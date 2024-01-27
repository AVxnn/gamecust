import React, { useContext, useEffect, useRef, useState } from "react";
import Bell from "../../../../public/img/svg/bell";
import styles from "./notificationIcon.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import NotificationItem from "../notificationItem";
import { getNotification } from "../../../../features/new/getNotifications/getNotifications";
import { Context } from "../../../../app/(pages)/layout";

const NotificationIcon = () => {

  const { mobxStore } = useContext(Context);

  const popupRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState([]);
  const [dropMenu, setDropMenu] = useState(false);

  const closePopup = () => {
    setDropMenu(false);
  };

  const handleClickOutside = (e: any) => {
    if (dropMenu) {
      if (
        labelRef.current &&
        !labelRef.current.contains(e.target) &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setDropMenu(false);
      }
    }
  };

  const getNewNotificationList = async () => {
    const result = await getNotification(mobxStore.user.id)
    setData(result)
  }

  useEffect(() => {
    getNewNotificationList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined" && dropMenu) {
      document.addEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
      return document.removeEventListener("click", (e: any) => {
        handleClickOutside(e);
      });
    }
  });

  return (
    <div className={styles.nofitication}>
      <div
        onClick={() => setDropMenu(!dropMenu)}
        ref={labelRef}
        className={styles.icon}
      >
        <Bell />
        {
          data.length >= 1 && <div className={styles.value}>{data.length}</div>
        }
      </div>
      <AnimatePresence initial={false} mode="wait">
        {dropMenu && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={popupRef}
            className={styles.dropdown}
          >
            <div className={styles.header}>
              <h4 className={styles.title}>Уведомления</h4>

              <Link className={styles.showMore} href={"/nv/notifications"}>
                Посмотреть еще
              </Link>
            </div>
            <div className={styles.list}>
              {
                data.length >= 1 ? data.map((item: any, index: number) => {
                  return <NotificationItem key={index} item={item} />
                  
                }) : (
                  <>
                    Похоже у вас нет уведомлений
                  </>
                )
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationIcon;