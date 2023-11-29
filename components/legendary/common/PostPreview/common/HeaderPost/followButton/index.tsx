import React, { useContext, useState } from "react";
import EditBlock from "../EditBlock";
import isRoleHandler from "../../../../../../../features/isRoleHandler";
import { Context } from "../../../../../../../app/(pages)/layout";
import Follow from "../../../../../../../public/img/svg/follow";
import styles from "./followButton.module.scss";
import Check from "../../../../../../../public/img/svg/Check";
import Unfollow from "../../../../../../../public/img/svg/unfollow";

const FollowButton = ({ data, changeSub }: any) => {
  const { mobxStore } = useContext(Context);

  const [hover, setHover] = useState(false);

  return (
    <>
      {isRoleHandler(mobxStore.user.id, data.userId) ? (
        <EditBlock postId={data.postId} />
      ) : mobxStore?.user?.subscriptions?.filter((e) => e === data.userId)
          .length ? (
        <>
          <span 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => changeSub()} className={styles.followBtn}>
            {
              hover ? (
                <>
                  <Unfollow />
                  Отписаться
                </>
              ) : (
                <>
                  <Check />
                  Подписан
                </>
              )
            }
          </span>
        </>
      ) : (
        <>
          <span onClick={() => changeSub()} className={styles.followBtn}>
            <Follow />
            Подписаться
          </span>
        </>
      )}
    </>
  );
};

export default FollowButton;
