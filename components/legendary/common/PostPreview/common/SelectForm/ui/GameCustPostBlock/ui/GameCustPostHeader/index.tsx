import React, { useContext, useEffect, useState, Suspense } from "react";
import styles from "./GameCustPostHeader.module.scss";
import Link from "next/link";
import ImageLoader from "react-imageloader";
import ContentLoader from "react-content-loader";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import { observer } from "mobx-react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import IconHandler from "../../../../../IconHandler";

function Preloader() {
  return (
    <ContentLoader
      height={42}
      width={42}
      style={{ borderRadius: "99px" }}
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

const GameCustPostHeader = ({ data, fixed }: any) => {
  return (
    <header className={`${styles.header} ${fixed ? styles.fixed : null}`}>
      <div className={styles.leftBlock}>
        <Link href={`/profile/${data?.user._id}`}>
          {data.category ? (
            <>
              <div className={styles.containerAvatar}>
                <ImageLoader
                  className={styles.avatar}
                  src={`${data?.user.avatarPath}`}
                  wrapper={React.createFactory("div")}
                  preloader={Preloader}
                ></ImageLoader>
                <Link href={`/category/${data.category._id}`}>
                  <ImageLoader
                    className={styles.categoryAvatar}
                    src={`${data.category.imagePath}`}
                    wrapper={React.createFactory("div")}
                    preloader={Preloader}
                  ></ImageLoader>
                </Link>
              </div>
              <div className={styles.info}>
                <span className={styles.name}>
                  {data?.user.username} <IconHandler user={data.user} />
                </span>
                <div className={styles.downinfo}>
                  <Link href={`/category/${data.category._id}`}>
                    <span className={styles.title}>{data.category.title}</span>
                  </Link>
                  <span className={styles.date}>
                    {formatDistance(+data?.publishedDate, Date.now(), {
                      addSuffix: true,
                      locale: ru,
                    })}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.containerAvatar}>
                <ImageLoader
                  className={styles.avatar}
                  src={`${data?.user.avatarPath}`}
                  wrapper={React.createFactory("div")}
                  preloader={Preloader}
                ></ImageLoader>
              </div>
              <div className={styles.info}>
                <span className={styles.name}>
                  {data?.user.username} <IconHandler user={data.user} />
                </span>
                <div className={styles.downinfo}>
                  <span className={styles.date}>
                    {formatDistance(+data?.publishedDate, Date.now(), {
                      addSuffix: true,
                      locale: ru,
                    })}
                  </span>
                </div>
              </div>
            </>
          )}
        </Link>
      </div>
    </header>
  );
};

export default observer(GameCustPostHeader);
