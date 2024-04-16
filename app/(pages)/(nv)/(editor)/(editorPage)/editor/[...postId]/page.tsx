"use client";

import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import uuid from "react-uuid";
import { Context } from "../../../../../layout";
import { getPost } from "../../../../../../../features/new/getPost/getPost";
import EditorBlock from "../../../../../../../components/legendary/MiddleBlock/editorBlock";

const PageEditor = () => {
  const [post, setPost] = useState([]) as any;
  const { mobxStore, postCreateStore, notificationStore } = useContext(Context);
  const { postId } = useParams() as any;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getFirstPosts = async (page = 0) => {
    const data = await getPost(decodeURIComponent(postId[1]));
    if (data) {
      setPost(data);
    }
  };

  useEffect(() => {
    async function checkRole() {
      if (!!mobxStore.user.id) {
        setLoading(true)
      } else {
        router.push('/');
      }
    }
    checkRole();
  }, [mobxStore.user, router]);

  useEffect(() => {
    getFirstPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (post?.category) {
      postCreateStore.changeCategory(post.category._id);
    }
    if (post?.title) {
      postCreateStore.updateTitle(post.title);
    }
    if (post.data?.length > 0) {
      postCreateStore.updateArray(post.data);
    } else {
      postCreateStore.updateArray([
        {
          type: "text",
          value: "",
          unicalId: uuid(),
          id: postCreateStore.data.length,
        },
      ]);
      postCreateStore.updateTitle("");
    }
    console.log(postCreateStore.postId, postCreateStore.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  useEffect(() => {
    postCreateStore.setPostId(postId ? decodeURIComponent(postId[1]) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return loading ? (
    <>
      <EditorBlock post={post} />
    </>
  ) : (<></>);
};

export default PageEditor;
