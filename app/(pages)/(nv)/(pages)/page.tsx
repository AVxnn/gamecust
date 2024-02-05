"use client"

import React from "react";
import styles from "./page.module.scss";
import PostList from "../../../../newComponents/post/postList";
import { getPostList } from "../../../../features/new/getPostList/getPostList";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Популярное | GameCust Новости из мира игр",
//   description:
//     "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
//   openGraph: {
//     title: "GameCust | Популярное",
//     description: "Популярное | GameCust",
//     url: "https://gamecust.ru/categories",
//     siteName: "GameCust",
//     images: [
//       {
//         url: "/mstile-150x150.png",
//         width: 150,
//         height: 150,
//       },
//     ],
//   },
// };

const PageRes = (props: any) => {
  return (
    <div className={styles.main}>
      <PostList fetchPosts={getPostList} />
    </div>
  );
};

export default PageRes;
