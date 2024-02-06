"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PostList from "../../../../../../../newComponents/post/postList";
import getDonePosts from "../../../../../../../features/new/getDonePosts/getDonePosts";

const Profile = () => {
  const { uid } = useParams() as any;

  const getFirstPosts = async (page = 0) => {
    return getDonePosts(uid, page);
  };

  return (
    <>
      <PostList fetchPosts={getFirstPosts} />
    </>
  );
};

export default Profile;
