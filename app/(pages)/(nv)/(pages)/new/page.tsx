"use client"

import React from "react";
import styles from "../page.module.scss";
import PostList from "../../../../../newComponents/post/postList";
import { getPostListNew } from "../../../../../features/new/getPostListNew/getPostListNew";

const PageRes = (props: any) => {

  return (
    <div className={styles.main}>
      <PostList fetchPosts={getPostListNew} />
    </div>
  );
};

export default PageRes;
