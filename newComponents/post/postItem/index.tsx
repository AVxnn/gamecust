import React from "react";
import Toolbar from "../../../components/legendary/common/PostPreview/common/toolbar";
import HeaderPost from "../../../components/legendary/common/PostPreview/common/HeaderPost";
import styles from "./postItem.module.scss";
import Title from "./UI/data/title";
import SubTitle from "./UI/data/subtitle";
import Description from "./UI/data/description";
import Br from "./UI/data/br/br";
import ImagePost from "./UI/data/imagePost";
import Video from "./UI/data/video";
import Link from "next/link";
import Tag from "../../../components/legendary/common/Tag";
import ListBlock from "./UI/data/listBlock";
import QuoteBlock from "./UI/data/QuoteBlock";
import GameCustPostBlock from "../../../components/legendary/common/PostPreview/common/SelectForm/ui/GameCustPostBlock";

const PostItem = ({ data }: any) => {
  return (
    <div className={styles.postItem}>
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
      <Link href={`/post/${data.postId}`}>
        <section className={styles.mainInfo}>
          <Title text={data?.title} />
          {data?.stared.map((item: any, index: number) => {
            if (item.type === "h2") {
              return <SubTitle key={index} item={item} />;
            } else if (item.type === "text") {
              return <Description key={index} item={item} />;
            } else if (item.type === "list") {
              return <ListBlock key={index} item={item} />;
            } else if (item.type === "quote") {
              return <QuoteBlock key={index} item={item} />;
            } else if (item.type === "media") {
              return <ImagePost key={index} item={item} />;
            } else if (item.type === "link") {
              if (item.typeMedia === "image") {
                return <ImagePost key={index} item={item} />;
              } else if (item.typeMedia === "video") {
                return <Video key={index} item={item} />;
              } else if (item.typeMedia === "gamecustpost") {
                return <GameCustPostBlock key={index} item={item} />;
              }
            } else if (item.type === "br") {
              return <Br key={index} />;
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

export default PostItem;
