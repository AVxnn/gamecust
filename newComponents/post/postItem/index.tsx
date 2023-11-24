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

const PostItem = ({ data }: any) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.headerContainer}>
        <HeaderPost data={data} />
      </div>
      <Link href={`/nv/post/${data.postId}`}>
        <section className={styles.mainInfo}>
          {data?.stared.map((item: any, index: number) => {
            if (item.type === "h1") {
              return <Title key={index} text={item.value} />;
            } else if (item.type === "h2") {
              return <SubTitle key={index} text={item.value} />;
            } else if (item.type === "text") {
              return <Description key={index} text={item.value} />;
            } else if (item.type === "media") {
              return <ImagePost key={index} href={item?.href} />;
            } else if (item.type === "link") {
              if (item.typeMedia === "image") {
                return <ImagePost key={index} href={item?.href} />;
              } else if (item.typeMedia === "video") {
                return <Video key={index} href={item?.href} />;
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
