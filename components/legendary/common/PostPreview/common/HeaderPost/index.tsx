import React, { useContext, useEffect, useState, Suspense } from "react";
import styles from "./HeaderPost.module.scss";
import Button from "../../../Button";
import Link from "next/link";
import ImageLoader from "react-imageloader";
import ContentLoader from "react-content-loader";
import isRoleHandler from "../../../../../../features/isRoleHandler";
import EditBlock from "./EditBlock";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react";
import IconHandler from "../IconHandler";
import { useMotionValueEvent, useScroll } from "framer-motion";
import UserBlock from "./UserBlock";
import { Context } from "../../../../../../app/(pages)/layout";

function Preloader() {
  return (
    <ContentLoader
      height={42}
      width={42}
      style={{borderRadius: '99px'}}
      speed={2}
      backgroundColor={"#333"}
      foregroundColor={"#999"}
      viewBox="0 0 70 70"
    >
      {/* Only SVG shapes */}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    </ContentLoader>
  );
}

const HeaderPost = ({ data, fixed }: any) => {
  const { mobxStore, popupHandlers, notificationStore } = useContext(Context);
  const [subscribe, setSubscribe] = useState(false);

  const changeSub = async () => {
    if (!mobxStore.user.email) {
      notificationStore.addItem({
        title: "Нужно выполнить авторизацию",
        status: "error",
        timeLife: 2500,
      });
      return popupHandlers.authPopupOpen();
    }
    let res = await mobxStore.updateAuth(data.userId, mobxStore.user.id);
    setSubscribe(!subscribe);
  };

  useEffect(() => {
    mobxStore?.user?.subscriptions?.map((item) => {
      if (item == data.id) {
        setSubscribe(true);
      } else {
        setSubscribe(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobxStore?.user?.subscriptions]);

  return (
    <header className={`${styles.header} ${fixed ? styles.fixed : null}`}>
      <div className={styles.leftBlock}>
        <Link href={`/nv/profile/${data.userId}`}>
          <ImageLoader
            className={styles.avatar}
            src={`${data?.userAvatar}`}
            wrapper={React.createFactory("div")}
            preloader={Preloader}
          ></ImageLoader>
          <div className={styles.info}>
            <span className={styles.name}>
              {data?.username} <IconHandler user={data} />
            </span>
            <span className={styles.date}>
              {formatDistance(+data.publishedDate, Date.now(), {
                addSuffix: true,
                locale: ru,
              })}
            </span>
          </div>
        </Link>
      </div>
      <div className={styles.rightBlock}>
        {isRoleHandler(mobxStore.user.id, data.userId) ? (
          <EditBlock postId={data.postId} />
        ) : mobxStore?.user?.subscriptions?.filter((e) => e === data.userId)
            .length ? (
          <>
            <Button clb={() => changeSub()} type={"primary"} size={"small"}>
              Отписаться
            </Button>
          </>
        ) : (
          <>
            <Button clb={() => changeSub()} type={"primary"} size={"small"}>
              Подписаться
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default observer(HeaderPost);
