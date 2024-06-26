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

  const { mobxStore, postCreateStore, popupHandlers } = useContext(Context);

  const openPost = async () => {
    if (mobxStore?.user?.email) {
      if (!isRoleHandler(data.user._id, mobxStore.user.id)) {
        addExpUser(data.userId, 25);
      } else if (!isRoleHandler(data.user._id, mobxStore.user.id)) {
        removeExpUser(data.user._id, 25);
      }
      const result = (await postCreateStore.likePost(
        mobxStore.user.id,
        data
      )) as any;
      setIsLikes(result.data.likes);
    } else {
      popupHandlers.authPopupOpen();
    }
  };

  return (
    <div onClick={() => openPost()} className={styles.counter}>
      {!isLikes.filter((user: any) => user.user === mobxStore.user.id)
        .length ? (
        <div className={styles.like}>
          <Like
            type={
              !isLikes.filter((user: any) => user.user === mobxStore.user.id)
                .length
            }
          />
        </div>
      ) : (
        <div className={styles.liked}>
          <Like
            type={
              !isLikes.filter((user: any) => user.user === mobxStore.user.id)
                .length
            }
          />
        </div>
      )}

      <span className={styles.title}>{isLikes.length}</span>
    </div>
  );
};

export default observer(Counter);
