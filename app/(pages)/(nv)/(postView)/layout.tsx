"use client";

import React from "react";
import styles from "./layout.module.scss";
import { observer } from "mobx-react-lite";
import NavigationLayout from "../../../../newComponents/navigation/navigationLayout";
import CreateButton from "../../../../newComponents/createButton";
import Premium from "../../../../components/legendary/RightBlock/Premium";
import Contacts from "../../../../components/legendary/RightBlock/Contacts";
import TopUsers from "../../../../components/legendary/RightBlock/TopUsers";
import PostList from "../../../../newComponents/post/postList";
import { getPostList } from "../../../../features/new/getPostList/getPostList";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.leftColumn}>
          <NavigationLayout />
          <CreateButton />
        </div>
        <div className={styles.middleColumn}>
          {children}
          <div className={styles.main}>
            <PostList fetchPosts={getPostList} />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Premium />
          <TopUsers />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default observer(LayoutPages);
