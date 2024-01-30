"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Context } from "../../../../layout";
import uuid from "react-uuid";
import { getPost } from "../../../../../../features/new/getPost/getPost";
import EditorBlock from "../../../../../../components/legendary/MiddleBlock/editorBlock";

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
