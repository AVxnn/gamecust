import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./DotsPreview.module.scss";
import { Context } from "../../../../../../../app/(pages)/layout";
import { AnimatePresence, motion } from "framer-motion";
import Dots from "../../../../../../../public/img/svg/Dots";
import Link from "next/link";
import Eye from "../../../../../../../public/img/svg/Eye";

const DotsPreview = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const Button = useRef<HTMLDivElement>(null);

  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);

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
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={popupRef}
            className={styles.dropMenu}
          >
            <Link
              href={`/post/${postCreateStore.postId}`}
              target="_blank"
              onClick={() => setIsDropOpen(false)}
              className={styles.dropItem}
            >
              <Eye />
              <span>Предпросмотр</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DotsPreview;
