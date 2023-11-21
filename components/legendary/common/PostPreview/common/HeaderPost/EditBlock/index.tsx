import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./EditBlock.module.scss";
import Dots from "../../../../../../../public/img/svg/Dots";
import Edit from "../../../../../../../public/img/svg/Edit";
import Trash from "../../../../../../../public/img/svg/Trash";
import Link from "next/link";
import { Context } from "../../../../../../../pages/_app";
import { useRouter } from "next/router";

const EditBlock = ({ postId }: any) => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const Button = useRef<HTMLDivElement>(null);

  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);

  const router = useRouter();

  const deleteHandler = (e: any) => {
    e.preventDefault();
    notificationStore.addItem({
      title: "Пост удален",
      status: "success",
      timeLife: 2500,
    });
    postCreateStore.deletePost(postId);
  };

  useEffect(() => {
    if (Button.current) {
      Button.current.addEventListener("mouseenter", () => setIsDropOpen(true));
      Button.current.addEventListener("mouseleave", () => setIsDropOpen(false));
    }

    return () => {
      if (Button.current) {
        Button.current.removeEventListener("mouseenter", () =>
          setIsDropOpen(true)
        );
        Button.current.removeEventListener("mouseleave", () =>
          setIsDropOpen(false)
        );
      }
    };
  });

  return (
    <div
      ref={Button}
      className={`${styles.container} ${isDropOpen ? styles.active : ""}`}
    >
      <button
        onMouseEnter={() => setIsDropOpen(true)}
        className={styles.button}
      >
        <Dots />
      </button>
      {isDropOpen && (
        <div className={styles.dropMenu}>
          <Link
            href={`/editor/${mobxStore.user.id}/${postId}`}
            className={styles.dropItem}
          >
            <Edit />
            <span>Редактировать</span>
          </Link>
          <div onClick={(e) => deleteHandler(e)} className={styles.dropItem}>
            <Trash />
            <span>Удалить</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBlock;
