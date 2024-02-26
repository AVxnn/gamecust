import React, { useContext, useState } from "react";
import { Context } from "../../../../../../../app/(pages)/layout";
import Follow from "../../../../../../../public/img/svg/follow";
import styles from "./followButton.module.scss";
import Check from "../../../../../../../public/img/svg/Check";
import Unfollow from "../../../../../../../public/img/svg/unfollow";
import { observer } from "mobx-react-lite";

const FollowButton = ({ data, changeSub }: any) => {
  const { mobxStore } = useContext(Context);

  const [hover, setHover] = useState(false);
  console.log(data);
  return data._id !== mobxStore.user.id ? (
    <>
      {mobxStore?.user?.subscriptions?.filter((e) => e === data._id).length ? (
        <>
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => changeSub()}
            className={styles.followBtn}
          >
            {hover ? (
              <>
                <Unfollow />
                Отписаться
              </>
            ) : (
              <>
                <Check />
                Подписан
              </>
            )}
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
  ) : (
    <></>
  );
};

export default observer(FollowButton);
