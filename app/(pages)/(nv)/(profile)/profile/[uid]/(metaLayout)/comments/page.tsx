"use client";

import React from "react";
import Empty from "../../../../../../../../components/legendary/common/Empty";
import { useParams } from "next/navigation";
import getCommentsId from "../../../../../../../../features/new/getCommentsId/getCommentsId";
import { CommentsList } from "../../../../../../../../newComponents/post/CommentsList";

const Comments = () => {
  const { uid } = useParams() as any;

  const getFirstPosts = async (page = 0) => {
    return getCommentsId(uid);
  };

  return (
    // <Empty
    //   text={"В разработке"}
    //   subtext={"Все врут! Даже спам врет, что он не спам!"}
    // />
    <CommentsList fetchComments={getFirstPosts} />
  );
};

export default Comments;
