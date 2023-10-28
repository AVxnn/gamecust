import React, { useEffect, useState } from "react";
import styles from "./Post.module.scss";
import HeaderPost from "../PostPreview/common/HeaderPost";
import Tag from "../Tag";
import HashTag from "../PostPreview/common/hashtag";
import Toolbar from "../PostPreview/common/toolbar";
import Comments from "../Comments";
import ReactPlayer from "react-player";
import ImgPopup from "../ImgPopup";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Post = ({ post, comments }: any) => {
  const { scrollY } = useScroll();
  console.log(comments);

  const [userData, setUserData] = useState() as any;

  const [isfixed, setIsFixed] = useState(false);

  const getUser = async () => {
    const user = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserId/${post.userId}`
    );

    setUserData(await user?.json());
  };

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    if (latest > 16) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  useEffect(() => {
    getUser();
  }, [post]);

  if (!post?.username) return <>Loading...</>;

  return (
    <div className={`${styles.postContainer} ${isfixed ? styles.fixed : null}`}>
      <HeaderPost
        data={post}
        user={userData}
        fixed={isfixed}
        scrollY={scrollY}
      />
      <section className={styles.tags}>
        {post?.tags?.map((item: any, index: number) => {
          return <Tag key={index} data={item}></Tag>;
        })}
      </section>
      <section className={styles.mainInfo}>
        {post?.data?.map((item: any, index: number) => {
          console.log(item);
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
          } else if (item.type === "link") {
            if (item.typeMedia === "image") {
              return <ImgPopup key={index} src={item?.href} />;
            } else if (item.typeMedia === "video") {
              return (
                <div key={index} className={styles.mediaBlock}>
                  <ReactPlayer
                    pip
                    width="100%"
                    className={styles.player}
                    controls={true}
                    url={item?.href}
                  />
                </div>
              );
            }
          } else if (item.type === "media") {
            return <ImgPopup key={index} src={item?.href} />;
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
      <section className={styles.hashList}>
        {post?.hashTags?.map((item: any, index: number) => {
          return <HashTag key={index} data={item} />;
        })}
      </section>
      <div id="comments"></div>
      <Toolbar data={post} />
      <Comments dataS={post} comments={comments} />
    </div>
  );
};

export default Post;
