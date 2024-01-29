"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PostList from "../../../../../../newComponents/post/postList";
import getDonePosts from "../../../../../../features/new/getDonePosts/getDonePosts";
import getCategoriesTitle from "../../../../../../features/new/getCategoriesTitle/getCategories";

const Category = () => {
  const { uid } = useParams() as any;

  const getFirstPosts = async (page = 0) => {
    return getCategoriesTitle(page, uid);
  };

  return (
    <>
      <PostList fetchPosts={getFirstPosts} />
    </>
  );
};

export default Category;
