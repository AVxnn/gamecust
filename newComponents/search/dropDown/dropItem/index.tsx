import React from "react";
import styles from "./dropItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import Pen from "../../../../public/img/svg/Pen";
import Eye from "../../../../public/img/svg/Eye";
import People from "../../../../public/img/svg/People";

const DropItem = ({ item, type, handlerLink }: any) => {
  return type === "users" ? (
    <div
      onClick={() => handlerLink(`/profile/${item._id}`)}
      className={styles.item}
    >
      <Image
        className={styles.avatar}
        src={item.avatarPath}
        alt={"avatar"}
        width={32}
        height={32}
      />
      <p className={styles.text}>{item.username}</p>
      <div className={styles.views}>
        <People />
        <span className={styles.title}>{item.subscribers.length}</span>
      </div>
    </div>
  ) : (
    <div
      onClick={() => handlerLink(`/post/${item.postId}`)}
      className={styles.item}
    >
      <div className={`${styles.iconBlock} ${styles.pen}`}>
        <Pen type={1} />
      </div>
      <p className={styles.text}>{item.title}</p>
      <div className={styles.views}>
        <Eye />
        <span className={styles.title}>{item.viewsCount}</span>
      </div>
    </div>
  );
};

export default DropItem;
