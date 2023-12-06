import React, { useContext, useEffect, useState } from "react";
import styles from "./Counter.module.scss";
import Like from "../../../../../../public/img/svg/Like";
import { observer } from "mobx-react-lite";
import isRoleHandler from "../../../../../../features/isRoleHandler";
import {
  addExpUser,
  removeExpUser,
} from "../../../../../../features/new/expInterface/expInterface";
import { Context } from "../../../../../../app/(pages)/layout";
import { createNotification } from "../../../../../../features/new/getNotifications/getNotifications";

const Counter = ({ data }: any) => {
  const [isLikes, setIsLikes] = useState(data.likes);

  const { mobxStore, postCreateStore } = useContext(Context);

  const openPost = () => {
    let result = isLikes.filter((item: any) => item.id == mobxStore.user.id);
    console.log(!result.length, isRoleHandler(data.userId, mobxStore.user.id));
    if (!isRoleHandler(data.userId, mobxStore.user.id) && !result.length) {
      addExpUser(data.userId, 25);
      createNotification(data.userId, '', 'Поставил(а) лайк на ваш пост', 'like',  mobxStore.user)
    } else if (!isRoleHandler(data.userId, mobxStore.user.id)) {
      removeExpUser(data.userId, 25);
    }
    if (!result.length) {
      postCreateStore.updatePost({
        ...data,
        likes: [
          ...isLikes,
          {
            id: mobxStore.user.id,
            username: mobxStore.user.username,
            avatarPath: mobxStore.user.avatarPath,
          },
        ],
      });
      setIsLikes([
        ...isLikes,
        {
          id: mobxStore.user.id,
          username: mobxStore.user.username,
          avatarPath: mobxStore.user.avatarPath,
        },
      ]);
    } else {
      let array = isLikes.filter((user: any) => user.id != mobxStore.user.id);
      postCreateStore.updatePost({ ...data, likes: array });
      setIsLikes(array);
    }
  };

  return (
    <div onClick={() => openPost()} className={styles.counter}>
      <div className={styles.like}>
        <Like
          type={
            !isLikes.filter((user: any) => user.id == mobxStore.user.id).length
          }
        />
      </div>
      <span className={styles.title}>{isLikes.length}</span>
    </div>
  );
};

export default observer(Counter);
