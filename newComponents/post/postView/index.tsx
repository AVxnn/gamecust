"use client";

import React, { Suspense, memo, useContext, useEffect, useState } from "react";
import Br from "../postItem/UI/data/br/br";
import styles from "./postView.module.scss";
import ImgPopup from "../../../components/legendary/common/ImgPopup";
import Video from "../postItem/UI/data/video";
import HeaderPost from "../../../components/legendary/common/PostPreview/common/HeaderPost";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Toolbar from "../../../components/legendary/common/PostPreview/common/toolbar";
import Comments from "../../../components/legendary/common/Comments";
import { useParams } from "next/navigation";
import { getComments } from "../../../features/new/getComment/getComment";
import { getUserId } from "../../../features/new/getUserId/getUserId";
import { getPost } from "../../../features/new/getPost/getPost";
import { Context } from "../../../app/(pages)/layout";
import addViewPost from "../../../features/new/views/addViewPost/addViewPost";
import uuid from "react-uuid";
import Title from "../postItem/UI/data/title";
import SubTitle from "../postItem/UI/data/subtitle";
import Description from "../postItem/UI/data/description";
import Loading from "./loading";
import ListBlock from "../postItem/UI/data/listBlock";
import QuoteBlock from "../postItem/UI/data/QuoteBlock";
import GameCustPostBlock from "../../../components/legendary/common/PostPreview/common/SelectForm/ui/GameCustPostBlock";

const PostView = memo(function PostView() {
  const { uid } = useParams() as any;
  const { scrollY } = useScroll();

  const { mobxStore } = useContext(Context) as any;

  const [commentsData, setCommentsData] = useState() as any;
  const [postData, setPostData] = useState() as any;

  const [isfixed, setIsFixed] = useState(false);

  const getData = async () => {
    const post = await getPost(uid);
    const comments = await getComments(uid);
    setPostData(post);
    setCommentsData(comments);
  };

  const getNewComments = async () => {
    const comments = await getComments(uid);
    setCommentsData(await comments);
  };

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    if (latest > 29) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postData?.published) {
      const addView = async () => {
        if (postData.postId) {
          if (!mobxStore.user.id && !localStorage.getItem("localToken")) {
            const localToken = uuid();
            localStorage.setItem("localToken", localToken);
            await addViewPost(localToken, postData.postId);
            return true;
          } else if (!mobxStore.user.id && localStorage.getItem("localToken")) {
            await addViewPost(
              localStorage.getItem("localToken"),
              postData.postId
            );
            return true;
          } else {
            await addViewPost(mobxStore.user.id, postData.postId);
          }
        }
      };
      if (postData?.postId) {
        addView();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData]);

  if (!postData?.user.username) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.postContainer}>
        <HeaderPost data={postData} fixed={isfixed} scrollY={scrollY} />
        <section className={styles.mainInfo}>
          <Title text={postData?.title} />
          {postData?.data?.map((item: any, index: number) => {
            if (item.type === "h2") {
              return <SubTitle key={index} item={item} />;
            } else if (item.type === "text") {
              return <Description key={index} item={item} />;
            } else if (item.type === "list") {
              return <ListBlock key={index} item={item} />;
            } else if (item.type === "quote") {
              return <QuoteBlock key={index} item={item} />;
            } else if (item.type === "link") {
              if (item.typeMedia === "image") {
                return <ImgPopup key={index} item={item} />;
              } else if (item.typeMedia === "video") {
                return <Video key={index} item={item} />;
              } else if (item.typeMedia === "gamecustpost") {
                return <GameCustPostBlock key={index} item={item} />;
              }
            } else if (item.type === "media") {
              return <ImgPopup key={index} item={item} />;
            } else if (item.type === "br") {
              return <Br key={index} />;
            }
          })}
        </section>
        <div id="comments"></div>
        {postData.published ? <Toolbar data={postData} /> : null}
        {commentsData && postData.published && (
          <Comments
            getNewComments={() => getNewComments()}
            dataS={postData}
            comments={commentsData}
          />
        )}
      </div>
    </Suspense>
  );
});

export default PostView;
