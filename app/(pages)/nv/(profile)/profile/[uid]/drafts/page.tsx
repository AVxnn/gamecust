"use client"

import React from 'react'
import Drafts from '../../../../../../../components/legendary/MiddleBlock/ChangeProfileBlock/Drafts'
import { getPostsId } from '../../../../../../../features/new/getPostsId/getPostsId';
import { useParams } from 'next/navigation';

const DraftsPage = () => {

  const { uid } = useParams() as any;
  
  const getFirstPosts = async (page = 0) => {
    return getPostsId(uid, page);
  };

  return (
    <Drafts fetchPosts={getFirstPosts} />
  )
}

export default DraftsPage