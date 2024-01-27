import React from "react";
import styles from "./search.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const DropDown = ({ isOpen }: any) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={popupRef}
          className={styles.dropdown}
        >
          <div className={styles.header}>
            <h4 className={styles.title}>Результат поиска</h4>

            <Link className={styles.showMore} href={"/nv/notifications"}>
              Посмотреть еще
            </Link>
          </div>
          <div className={styles.list}>
            {data.length >= 1 ? (
              data.map((item: any, index: number) => {
                return <>he</>;
              })
            ) : (
              <>Похоже у вас нет уведомлений</>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDown;
