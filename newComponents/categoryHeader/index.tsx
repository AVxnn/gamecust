"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./categoryHeader.module.scss";
import Image from "next/image";
import { getUserId } from "../../features/new/getUserId/getUserId";
import { getPostsId } from "../../features/new/getPostsId/getPostsId";
import AvatarPopup from "../../components/legendary/common/AvatarPopup";
import IconHandler from "../../components/legendary/common/PostPreview/common/IconHandler";
import Tabs from "../../components/legendary/common/Tabs";
import ButtonChanger from "../../components/legendary/MiddleBlock/Profile/ui/ButtonChanger";
import isRoleHandler from "../../features/isRoleHandler";
import { observer } from "mobx-react-lite";
import { Context } from "../../app/(pages)/layout";
import BgProfilePopup from "../../components/legendary/common/bgProfilePopup";
import LvlPopup from "../lvlPopup";
import getCategoriesId from "../../features/new/getCategoryId/getCategories";

const CategoryHeader = () => {
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
    const res = await getCategoriesId(uid);
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
  }, [mobxStore.user, uid]);

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
  }, []);
  console.log(data);
  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.bgImage}>
          <BgProfilePopup src={data.bgPath} />
        </div>
        <div className={styles.header}>
          <div className={styles.left}>
            <AvatarPopup src={data.imagePath} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.rightMobile}>
              {data && (
                <>
                  <span className={styles.name}>
                    {data?.title}
                    <IconHandler user={data} />
                  </span>
                  <span className={styles.description}>
                    {data?.description}
                  </span>
                </>
              )}
            </div>
            <div className={styles.headers}>
              <span className={styles.subs}>
                {data?.subscribers ? data.subscribers.length : 0} подписчиков
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
              {dataTagAccount &&
                dataTagAccount.map((item: any, index: number) => {
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
      </div>
    </>
  );
};

export default observer(CategoryHeader);
