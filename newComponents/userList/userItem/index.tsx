import React, { useContext } from "react";
import styles from "./userItem.module.scss";
import FollowButton from "../../../components/legendary/common/PostPreview/common/HeaderPost/followButton";
import { Context } from "../../../app/(pages)/layout";
import { createNotification } from "../../../features/new/getNotifications/getNotifications";
import Link from "next/link";

const UserItem = ({ data }: any) => {
  const { mobxStore, popupHandlers, notificationStore } = useContext(Context);

  const changeSub = async () => {
    if (!mobxStore.user.email) {
      notificationStore.addItem({
        title: "Нужно выполнить авторизацию",
        status: "error",
        timeLife: 2500,
      });
      return popupHandlers.authPopupOpen();
    }
    if (mobxStore.user.subscriptions.filter((e) => e == data._id).length) {
      createNotification(
        data._id,
        "",
        "Отписался от вас",
        "follow",
        mobxStore.user.id
      );
    } else {
      createNotification(
        data._id,
        "",
        "Подписался на вас",
        "follow",
        mobxStore.user.id
      );
    }
    let res = await mobxStore.updateAuth(data._id, mobxStore.user.id);
  };

  return (
    <Link href={`/profile/${data._id}`}>
      <div className={styles.block}>
        <div className={styles.avatar}>
          <img src={data.avatarPath} alt={"avatar"} />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{data.username}</div>
          <div className={styles.description}>{data.description}</div>
        </div>

        <div className={styles.button}>
          <FollowButton changeSub={changeSub} data={data} />
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
