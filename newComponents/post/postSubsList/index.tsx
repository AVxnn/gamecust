"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./postList.module.scss";
import PostItem from "../postItem";
import Empty from "../../../components/legendary/common/Empty";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../postList/loading";
import { Context } from "../../../app/(pages)/layout";
import { observer } from "mobx-react-lite"; 

const PostSubsList = ({ fetchPosts }: any) => {
  const [hasMore, setHasMore] = useState(true);

  const { mobxStore } = useContext(Context);

  const [posts, setPosts] = useState([]) as any;
  const [page, setPage] = useState(1) as any;

  const getMorePost = async () => {
    const res = await fetchPosts(mobxStore.user.id, page);
    const newPosts = await res;

    if (newPosts.length <= 10) {
      setHasMore(false);
    }
    setPosts((post: any) => [...post, ...newPosts]);
    setPage(page + 1);
  };

  const getFirstPosts = async () => {
    const res = await fetchPosts(mobxStore.user.id, 0);
    const newPosts = await res;

    if (newPosts.length < 10) {
      setHasMore(false);
    }
    setPosts((post: any) => [...newPosts]);
  };

  useEffect(() => {
    if (mobxStore.user.id) {
      getFirstPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobxStore.user]);

  return mobxStore.user ? (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePost}
      className={styles.list}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={<Empty text={"Лента закончилась"} />}
    >
      {posts.map((data: any, index: any) => {
        if (data.published) {
          return <PostItem key={index} data={data} />
        } 
      })}
    </InfiniteScroll>
  ) : (
    <></>
  );
};

export default observer(PostSubsList);
