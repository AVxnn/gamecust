"use client";

import Skeleton from "react-loading-skeleton";
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
import SubscribersPopup from "../../components/legendary/RightBlock/Subscribers/SubscribersPopup";
import SubscriptionsPopup from "../../components/legendary/RightBlock/Subscriptions/SubscriptionsPopup";
import Link from "next/link";
import LinkIcon from "../../public/img/svg/LinkIcon";
import Calendary from "../../public/img/svg/calendary";

const CategoryHeader = ({ data }: any) => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
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
              {data.username ? (
                <>
                  <span className={styles.name}>
                    {data?.username}
                    <IconHandler user={data} />
                  </span>
                </>
              ) : (
                <Skeleton
                  width={320}
                  height={29}
                  style={{ marginBottom: 12 }}
                />
              )}
              {data.description ? (
                <span className={styles.description}>
                  <Linkify options={{ target: "_blank" }}>
                    {data?.description}
                  </Linkify>
                </span>
              ) : (
                <Skeleton width={280} style={{ marginBottom: 16 }} />
              )}
            </div>
            <div className={styles.headers}>
              {data?.subscribers?.length > 0 ? (
                <span onClick={() => setIsOpen(true)} className={styles.subs}>
                  <span>{data?.subscribers?.length} </span>
                  {declOfNum(data?.subscribers ? data.subscribers.length : 0, [
                    "подписчик",
                    "подписчика",
                    "подписчиков",
                  ])}
                </span>
              ) : (
                <Skeleton />
              )}
              <SubscribersPopup
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                data={data}
              />
              {data?.subscriptions?.length > 0 ? (
                <span onClick={() => setIsOpenS(true)} className={styles.subs}>
                  <span>{data?.subscriptions?.length} </span>
                  {declOfNum(
                    data?.subscriptions ? data.subscriptions.length : 0,
                    ["подписок", "подписки", "подписок"]
                  )}
                </span>
              ) : (
                <Skeleton />
              )}
              <SubscriptionsPopup
                setIsOpen={setIsOpenS}
                isOpen={isOpenS}
                data={data}
              />
            </div>
            {data.website ? (
              <Link href={data.website} className={styles.link}>
                <LinkIcon />
                {data.website.replace("https://", "")
                  ? data.website.replace("https://", "")
                  : ""}
              </Link>
            ) : (
              ""
            )}
            {formattedDate != "Invalid Date" ? (
              <div className={styles.date}>
                <Calendary /> Регистрация: {formattedDate}
              </div>
            ) : (
              <Skeleton width={300} />
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
