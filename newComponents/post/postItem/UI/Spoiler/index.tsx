import React, { useState } from "react";
import styles from "./spoiler.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Eye from "../../../../../public/img/svg/Eye";

const Spoiler = ({ item }: any) => {
  const [show, setShow] = useState(item.spoiler);
  const handlerShow = (e: any) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {show ? (
          <motion.div
            key={"modal"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.spoiler}>
              <button onClick={(e) => handlerShow(e)} className={styles.button}>
                <Eye />
                Показать
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Spoiler;
