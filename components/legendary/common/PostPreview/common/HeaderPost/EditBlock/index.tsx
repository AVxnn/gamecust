import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./EditBlock.module.scss";
import Dots from "../../../../../../../public/img/svg/Dots";
import Edit from "../../../../../../../public/img/svg/Edit";
import Trash from "../../../../../../../public/img/svg/Trash";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../../../../app/(pages)/layout";

const EditBlock = ({ postId }: any) => {
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
    postCreateStore.deletePost(postId);
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
  console.log(mobxStore.user);
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
              href={`/nv/editor/${mobxStore.user.id}/${postId}`}
              className={styles.dropItem}
            >
              <Edit />
              <span>Редактировать</span>
            </Link>
            <div onClick={(e) => deleteHandler(e)} className={styles.dropItem}>
              <Trash />
              <span>Удалить</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default observer(EditBlock);
