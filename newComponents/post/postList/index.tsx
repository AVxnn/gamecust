"use client";

import React, { useEffect, useState } from "react";
import styles from "./postList.module.scss";
import { getPostList } from "../../../features/new/getPostList/getPostList";
import PostPreview from "../../../components/legendary/common/PostPreview";
import PostItem from "../postItem";
import Empty from "../../../components/legendary/common/Empty";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./loading";

const PostList = ({ fetchPosts }: any) => {
  const [hasMore, setHasMore] = useState(true);

  const [posts, setPosts] = useState([]) as any;
  const [page, setPage] = useState(1) as any;

  const getMorePost = async () => {
    const res = await fetchPosts(page);
    const newPosts = await res;

    if (newPosts.length <= 1) {
      setHasMore(false)
    }
    setPosts((post: any) => [...post, ...newPosts]);
    setPage(page + 1)
  };

  const getFirstPosts = async () => {
    const res = await fetchPosts(0);
    const newPosts = await res;
    setPosts((post: any) => [...newPosts]);
  };

  useEffect(() => {
    getFirstPosts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePost}
      className={styles.list}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={<Empty text={'Лента закончилась'} />}
    >
      {posts.map((data: any, index: any) => (
        <PostItem key={index} data={data} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
