"use client"

import React, { useEffect, useState } from 'react'
import Br from '../postItem/UI/data/br/br';
import styles from "./postView.module.scss"
import ImgPopup from '../../../components/legendary/common/ImgPopup';
import Video from '../postItem/UI/data/video';
import HeaderPost from '../../../components/legendary/common/PostPreview/common/HeaderPost';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Toolbar from '../../../components/legendary/common/PostPreview/common/toolbar';
import Comments from '../../../components/legendary/common/Comments';
import { useParams } from 'next/navigation';
import { getComments } from '../../../features/new/getComment/getComment';
import { getUserId } from '../../../features/new/getUserId/getUserId';
import { getPost } from '../../../features/new/getPost/getPost';

const PostView = () => {
  
  const { uid } = useParams() as any;

  const { scrollY } = useScroll();

  const [commentsData, setCommentsData] = useState() as any;
  const [postData, setPostData] = useState() as any;
  const [userData, setUserData] = useState() as any;

  const [isfixed, setIsFixed] = useState(false);

  const getData = async () => {
    const post = await getPost(uid)
    const comments = await getComments(uid)
    const user = await getUserId(uid)
    setPostData(await post);
    setCommentsData(await comments)
    setUserData(await user)
  };

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    if (latest > 16) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(postData, commentsData, userData);
  if (!postData?.username) return <>Loading...</>;

  return (
    <div className={`${styles.postContainer} ${isfixed ? styles.fixed : null}`}>
      <HeaderPost
        data={postData}
        user={userData}
        fixed={isfixed}
        scrollY={scrollY}
      />
      <section className={styles.mainInfo}>
        {postData?.data?.map((item: any, index: number) => {
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
              return <Video key={index} href={item.href} />;
            }
          } else if (item.type === "media") {
            return <ImgPopup key={index} src={item?.href} />;
          } else if (item.type === "br") {
            return <Br key={index} />;
          }
        })}
      </section>
      <div id="comments"></div>
      <Toolbar data={postData} />
      <Comments dataS={postData} comments={commentsData} />
    </div>
  );
}

export default PostView