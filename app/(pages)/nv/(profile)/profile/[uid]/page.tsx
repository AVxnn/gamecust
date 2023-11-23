"use client";

import React, { useEffect, useState } from "react";
import { getPostsId } from "../../../../../../features/new/getPostsId/getPostsId";
import { useParams } from "next/navigation";
import PostList from "../../../../../../newComponents/post/postList";

const Profile = () => {
  const { uid } = useParams() as any;

  const getFirstPosts = async (page = 0) => {
    return getPostsId(uid, page);
  };

  return (
    <>
      <PostList fetchPosts={getFirstPosts} />
    </>
  );
};

export default Profile;
