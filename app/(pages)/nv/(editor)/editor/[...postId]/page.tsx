"use client"

import React, { useContext, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import { Context } from '../../../../layout';
import uuid from 'react-uuid';
import { getPost } from '../../../../../../features/new/getPost/getPost';
import EditorBlock from '../../../../../../components/legendary/MiddleBlock/editorBlock';

const PageEditor = () => {

  const [post, setPost] = useState([]);
  const {mobxStore, postCreateStore, notificationStore} = useContext(Context);
  const postId = useParams()
  const router = useRouter()
  
  const getFirstPosts = async (page = 0) => {
    setPost(await getPost(postId));
  };
  
  useEffect(() => {
    getFirstPosts()
    if (post?.length > 0) {
      postCreateStore.updateArray(post)
    } else {
      postCreateStore.updateArray([
        {
            type: 'h1',
            value: '',
            stared: true,
            unicalId: uuid(),
            id: 0,
        },
      ])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    postCreateStore.setPostId(postId ? postId[1] : '')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId])

  return (
    <EditorBlock />
  )
}

export default PageEditor