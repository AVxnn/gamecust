"use client"

import React from "react";
import styles from "./page.module.scss";
import { getSubsPostList } from "../../../../../features/new/getPostList/getPostList";
import PostSubsList from "../../../../../newComponents/post/postSubsList";

const PageRes = (props: any) => {
  return (
    <div className={styles.main}>
      <PostSubsList fetchPosts={getSubsPostList} />
    </div>
  );
};

export default PageRes;
