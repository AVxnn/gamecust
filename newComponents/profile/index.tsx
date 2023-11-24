"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./profile.module.scss";
import Image from "next/image";
import { Context } from "../../app/(pages)/layout";
import { getUserId } from "../../features/new/getUserId/getUserId";
import { getPostsId } from "../../features/new/getPostsId/getPostsId";
import AvatarPopup from "../../components/legendary/common/AvatarPopup";
import IconHandler from "../../components/legendary/common/PostPreview/common/IconHandler";
import Tabs from "../../components/legendary/common/Tabs";
import ButtonChanger from "../../components/legendary/MiddleBlock/Profile/ui/ButtonChanger";
import isRoleHandler from "../../features/isRoleHandler";
import { observer } from "mobx-react-lite";

const Profile = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]) as any;
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
  const { mobxStore } = useContext(Context);

  const router = useRouter() as any;

  const pathname = usePathname() as any;
  const { uid } = useParams() as any;

  const changePage = (index: number) => {
    setActive(index);
  };

  const getFirstUser = async () => {
    const res = await getUserId(uid);
    const newPosts = await res;
    setData(newPosts);
  };
  console.log(isRoleHandler(mobxStore.user.id, uid), mobxStore.user.id, uid);
  useEffect(() => {
    if (isRoleHandler(mobxStore.user.id, uid)) {
      console.log("есть доступ");
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
  }, [mobxStore, uid]);

  useEffect(() => {
    switch (pathname.split("/")[4]) {
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

  useEffect(() => {
    getFirstUser();
  }, [pathname]);

  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.bgImage}>
          {
            data.avatarPath ? (
              <Image layout={"fill"} src={data.avatarPath} alt={"bg"} />
            ) : (
              <div className={styles.solidAvatar}></div>
            )
          }
        </div>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div className={styles.contImg}>
                <AvatarPopup src={data.avatarPath} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.rightMobile}>
              {data && (
                <>
                  <span className={styles.name}>
                    {data.username}
                    <IconHandler user={data} />
                  </span>
                  <span className={styles.description}>
                    {data?.description}
                  </span>
                </>
              )}
            </div>
            <div className={styles.headers}>
              <span className={styles.lvl}>Ур. {data.level}</span>
              <span className={styles.subs}>
                {data.subscribers ? data.subscribers.length : 0} подписчиков
              </span>
            </div>
            <div className={styles.date}>На проекте с 12 фев 2021</div>
            <ul ref={menuRef} className={styles.navigation}>
              {/* {
                mobxStore.user.id === data._id ? dataTag.map((item : any, index : number) => {
                  return (
                    <Tabs link={`/nv/profile/${data._id}/${item.link}`} key={index} onClick={() => changePage(index)} current={active == index}>{item.title}</Tabs>
                  )
                }) : ''
              } */}
              {dataTagAccount.map((item: any, index: number) => {
                return (
                  <Tabs
                    link={`/nv/profile/${data._id}/${item.link}`}
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
        {isRoleHandler(mobxStore?.user?.id, data._id) ? <ButtonChanger /> : ""}
      </div>
    </>
  );
};

export default observer(Profile);
