import React, { useContext } from "react";
import styles from "./NotificationList.module.scss";
import NotificationItem from "./NotificationItem";
import { observer } from "mobx-react";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../../../public/img/svg/Check";
import { Context } from "../../../../app/(pages)/layout";

const NotificationList = () => {
  const { notificationStore } = useContext(Context);
  console.log(notificationStore.store);
  return (
    <>
      <div className={styles.notificationList}>
        <AnimatePresence mode={"popLayout"}>
          {notificationStore.store.map((item: any, index: number) => {
            return (
              <motion.li
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <NotificationItem item={item} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default observer(NotificationList);
