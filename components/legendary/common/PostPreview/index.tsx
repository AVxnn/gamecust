import React, { useContext, useEffect, useState } from "react";
import styles from "./PostPreview.module.scss";
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "./common/hashtag";
import Toolbar from "./common/toolbar";
import HeaderPost from "./common/HeaderPost";
import ReactPlayer from "react-player";
import ImgPopup from "../ImgPopup";
import ImageAndSlider from "../ImageAndSlider";
import { Context } from "../../../../app/(pages)/layout";
import ListBlock from "../../../../newComponents/post/postItem/UI/data/listBlock";

const PostPreview = ({ data }: any) => {
  const { mobxStore, postCreateStore } = useContext(Context);

  const openPost = () => {
    let result = data.views.filter((user: string) => user == mobxStore.user.id);

    if (!result.length && mobxStore.user.id)
      postCreateStore.reSavePost(
        mobxStore.user,
        {
          ...data,
          views: [...data.views, mobxStore.user.id],
          viewsCount: data.viewsCount + 1,
        },
        data.postId
      );
  };

  return (
    <div className={styles.postPreview}>
      <div className={styles.headerContainer}>
        <HeaderPost data={data} />
      </div>
      {data?.tags?.length ? (
        <section className={styles.tags}>
          {data.tags.map((item: any, index: number) => {
            return (
              <Tag key={index} data={item}>
                {item.title}
              </Tag>
            );
          })}
        </section>
      ) : null}
      <Link
        onClick={() => openPost()}
        className={styles.post}
        href={`/post/${data.postId}`}
      >
        <section className={styles.mainInfo}>
          {data?.stared.map((item: any, index: number) => {
            if (item.type === "h1") {
              return (
                <h1
                  key={index}
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></h1>
              );
            } else if (item.type === "h2") {
              return (
                <h2
                  key={index}
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></h2>
              );
            } else if (item.type === "text") {
              return (
                <p
                  key={index}
                  className={styles.subtitle}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                ></p>
              );
            } else if (item.type === "list") {
              return <ListBlock key={index} text={item.value} />;
            } else if (item.type === "media") {
              return <ImageAndSlider key={index} data={item} />;
            } else if (item.type === "link") {
              if (item.typeMedia === "image") {
                return <ImageAndSlider key={index} data={item} />;
              } else if (item.typeMedia === "video") {
                return (
                  <div
                    onClick={(event: any) => event.preventDefault()}
                    key={index}
                    className={styles.mediaBlock}
                  >
                    <ReactPlayer
                      pip={false}
                      onClick={(event: any) => event.preventDefault()}
                      width="100%"
                      style={{ overflow: "hidden", borderRadius: "8px" }}
                      className={styles.player}
                      controls={true}
                      playsinline={true}
                      playing={true}
                      muted={true}
                      url={item?.href}
                    />
                  </div>
                );
              }
            } else if (item.type === "br") {
              return (
                <div key={index} className={styles.container}>
                  <div className={styles.br}>
                    <div className={styles.oval}></div>
                    <div className={styles.oval}></div>
                    <div className={styles.oval}></div>
                  </div>
                </div>
              );
            }
          })}
        </section>
      </Link>
      <div className={styles.toolBarContainer}>
        <Toolbar data={data} />
      </div>
    </div>
  );
};

export default PostPreview;
