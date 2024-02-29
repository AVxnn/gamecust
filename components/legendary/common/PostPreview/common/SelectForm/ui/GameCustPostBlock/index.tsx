import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./GameCustPostBlock.module.scss";
import SubTitle from "../../../../../../../../newComponents/post/postItem/UI/data/subtitle";
import Description from "../../../../../../../../newComponents/post/postItem/UI/data/description";
import ListBlock from "../../../../../../../../newComponents/post/postItem/UI/data/listBlock";
import QuoteBlock from "../../../../../../../../newComponents/post/postItem/UI/data/QuoteBlock";
import ImagePost from "../../../../../../../../newComponents/post/postItem/UI/data/imagePost";
import Video from "../../../../../../../../newComponents/post/postItem/UI/data/video";
import Br from "../../../../../../../../newComponents/post/postItem/UI/data/br/br";
import Tag from "../../../../../Tag";
import { getPost } from "../../../../../../../../features/new/getPost/getPost";
import Title from "../../../../../../../../newComponents/post/postItem/UI/data/title";
import GameCustPostHeader from "./ui/GameCustPostHeader";
import Spoiler from "../../../../../../../../newComponents/post/postItem/UI/Spoiler";

const GameCustPostBlock = ({ item }: any) => {
  const [data, setData] = useState({}) as any;
  console.log(item)
  const getData = async () => {
    const url = new URL(item.href);

    const result = url.pathname.split("/").pop();
    const post = await getPost(result);
    if (post != null) {
      setData(post);
    }
  };

  useEffect(() => {
    if (item.href) {
      getData();
    }
  }, [item]);

  return (
    data?.title && (
      <div className={styles.postItem}>
        <div className={styles.headerContainer}>
          <GameCustPostHeader data={data} />
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
                }
              } else if (item.type === "br") {
                return <Br key={index} />;
              }
            })}
          </section>
        </Link>
        <Spoiler item={item}/>
      </div>
    )
  );
};

export default GameCustPostBlock;
