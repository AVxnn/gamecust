"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./Drafts.module.scss";
import DraftItem from "./DraftItem";
import Empty from "../../../common/Empty";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../../../newComponents/post/postList/loading";
import isRoleHandler from "../../../../../features/isRoleHandler";
import { Context } from "../../../../../app/(pages)/layout";

const Drafts = ({ fetchPosts }: any) => {
  const [hasMore, setHasMore] = useState(true);

  const [posts, setPosts] = useState([]) as any;
  const [page, setPage] = useState(1) as any;

  const { mobxStore } = useContext(Context);

  const getMorePost = async () => {
    const res = await fetchPosts(page);
    const newPosts = await res.filter((e: any) => !e.published);
    if (newPosts.length <= 1) {
      setHasMore(false);
    }
    setPosts((post: any) => [...post, ...newPosts]);
    setPage(page + 1);
  };

  const getFirstPosts = async () => {
    const res = await fetchPosts(0);
    const newPosts = await res.filter((e: any) => !e.published);
    setPosts((post: any) => [...newPosts]);
  };

  useEffect(() => {
    getFirstPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.drafts}>
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          className={styles.list}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={<Empty text={"Лента закончилась"} />}
        >
          {posts.map((data: any, index: any) => (
            <DraftItem getMorePost={getMorePost} key={index} data={data} />
          ))}
        </InfiniteScroll>
        {/* <DraftItem key={index} data={item} /> */}
      </div>
    </>
  );
};

export default observer(Drafts);
