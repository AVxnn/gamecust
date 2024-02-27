"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./categoryHeader.module.scss";
import AvatarPopup from "../../components/legendary/common/AvatarPopup";
import IconHandler from "../../components/legendary/common/PostPreview/common/IconHandler";
import Tabs from "../../components/legendary/common/Tabs";
import isRoleHandler from "../../features/isRoleHandler";
import { observer } from "mobx-react-lite";
import { Context } from "../../app/(pages)/layout";
import BgProfilePopup from "../../components/legendary/common/bgProfilePopup";
import FollowButton from "../../components/legendary/common/PostPreview/common/HeaderPost/followButton";
import { createNotification } from "../../features/new/getNotifications/getNotifications";
import Linkify from "linkify-react";
import { declOfNum } from "../../utils/declOfNum";

const CategoryHeader = ({ data }: any) => {
  const [active, setActive] = useState(0);
  const [dataTagAccount, setDataTagAccount] = useState([
    {
      title: "Статьи",
      link: "",
    },
    {
      title: "Комментарии",
      link: "comments",
    },
  ]) as any;
  const menuRef = useRef<HTMLUListElement>(null);
  const { mobxStore, notificationStore, popupHandlers } = useContext(Context);

  const router = useRouter() as any;

  const pathname = usePathname() as any;
  const { uid } = useParams() as any;

  const changePage = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    if (isRoleHandler(mobxStore.user.id, uid)) {
      setDataTagAccount([
        {
          title: "Статьи",
          link: "",
        },
        {
          title: "Комментарии",
          link: "comments",
        },
        {
          title: "Черновики",
          link: "drafts",
        },
      ]);
    }
  }, [mobxStore.user, uid]);

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
    setSubscribe(!subscribe);
  };

  useEffect(() => {
    mobxStore?.user?.subscriptions?.map((item) => {
      if (item == data._id) {
        setSubscribe(true);
      } else {
        setSubscribe(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobxStore?.user?.subscriptions]);

  useEffect(() => {
    switch (pathname.split("/")[3]) {
      case "entries":
        return setActive(0);
      case "comments":
        return setActive(1);
      case "drafts":
        return setActive(2);
      default:
        return setActive(0);
    }
  }, [pathname]);

  const originalDate = new Date(data?.createdAt);

  const options = { day: "numeric", month: "long", year: "numeric" } as any;

  const formattedDate = originalDate.toLocaleDateString("ru-RU", options);

  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.bgImage}>
          <BgProfilePopup src={data.bgPath} />
        </div>
        <div className={styles.header}>
          <div className={styles.left}>
            <AvatarPopup src={data.avatarPath} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.followBtn}>
            <FollowButton changeSub={changeSub} data={data} />
          </div>
          <div className={styles.left}>
            <div className={styles.rightMobile}>
              {data && (
                <>
                  <span className={styles.name}>
                    {data?.username}
                    <IconHandler user={data} />
                  </span>
                  <span className={styles.description}>
                    <Linkify options={{ target: "_blank" }}>
                      {data?.description}
                    </Linkify>
                  </span>
                </>
              )}
            </div>
            <div className={styles.headers}>
              {data?.subscribers && (
                <span className={styles.subs}>
                  {data?.subscribers?.length}{" "}
                  {declOfNum(data?.subscribers ? data.subscribers.length : 0, [
                    "подписчик",
                    "подписчика",
                    "подписчиков",
                  ])}
                </span>
              )}
            </div>
            {formattedDate != "Invalid Date" && (
              <div className={styles.date}>На проекте с {formattedDate}</div>
            )}
            <ul ref={menuRef} className={styles.navigation}>
              {dataTagAccount &&
                dataTagAccount.map((item: any, index: number) => {
                  return (
                    <Tabs
                      link={`/profile/${data._id}/${item.link}`}
                      key={index}
                      onClick={() => changePage(index)}
                      current={active == index}
                    >
                      {item.title}
                    </Tabs>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(CategoryHeader);
