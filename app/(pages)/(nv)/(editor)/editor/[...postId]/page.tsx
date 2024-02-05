"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Context } from "../../../../layout";
import uuid from "react-uuid";
import { getPost } from "../../../../../../features/new/getPost/getPost";
import EditorBlock from "../../../../../../components/legendary/MiddleBlock/editorBlock";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Редактор | GameCust Новости из мира игр",
//   description: "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
//   openGraph: {
//     title: "GameCust | Редактор",
//     description: "Редактор | GameCust",
//     url: "https://gamecust.ru/categories",
//     siteName: "GameCust",
//     images: [
//       {
//         url: "/mstile-150x150.png",
//         width: 150,
//         height: 150
//       }
//     ]
//   }
// }

const PageEditor = () => {
  const [post, setPost] = useState([]) as any;
  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);
  const { postId } = useParams() as any;
  const router = useRouter();

  const getFirstPosts = async (page = 0) => {
    const data = await getPost(decodeURIComponent(postId[1]));
    console.log(data);
    if (data) {
      setPost(data);
    }
  };

  useEffect(() => {
    getFirstPosts();
  }, []);

  useEffect(() => {
    if (post?.category) {
      postCreateStore.changeCategory(post.category._id);
    }
    if (post.data?.length > 0) {
      postCreateStore.updateArray(post.data);
    } else {
      postCreateStore.updateArray([
        {
          type: "h1",
          value: "",
          stared: true,
          unicalId: uuid(),
          id: 0,
        },
      ]);
    }
    console.log(postCreateStore.postId, postCreateStore.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  useEffect(() => {
    postCreateStore.setPostId(postId ? decodeURIComponent(postId[1]) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return <EditorBlock post={post} />;
};

export default PageEditor;
