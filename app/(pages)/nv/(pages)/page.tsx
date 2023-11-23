"use client";

import React from "react";
import styles from "./page.module.scss";
import PostList from "../../../../newComponents/post/postList";
import { getPostList } from "../../../../features/new/getPostList/getPostList";

const PageRes = (props: any) => {

  return (
    <div className={styles.main}>
      <PostList fetchPosts={getPostList} />
    </div>
  );
};

export default PageRes;
