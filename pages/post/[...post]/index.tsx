import React, {useContext, useEffect, useRef, useState} from 'react';
import Head from "next/head";
import Header from "../../../components/legendary/header";
import Layout from "../../../components/layout";
import styles from './Post.module.scss'
import CreatePostRight from "../../../components/legendary/RightBlock/CreatePostRight";
import Premium from "../../../components/legendary/RightBlock/Premium";
import TopUsers from "../../../components/legendary/RightBlock/TopUsers";
import NewsSliderSmall from "../../../components/legendary/RightBlock/NewsSliderSmall";
import TopGroup from "../../../components/legendary/RightBlock/TopGroup";
import Contacts from "../../../components/legendary/RightBlock/Contacts";
import Post from "../../../components/legendary/common/Post";
import LoginRight from "../../../components/legendary/RightBlock/LoginRight";
import { useMotionValueEvent, useScroll } from 'framer-motion';

const OnePost = ({post, comments} : any) => {

  const { scrollY } = useScroll()
  const [isfixed, setIsFixed] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest: any) => {
      if (latest > 840) {
      setIsFixed(true)
      } else {
      setIsFixed(false)
      }
  })

  return (
    <>
      <Head>
        <title>Пост | GameCust</title>
        <meta name="description" content="Социальная сеть для геймеров и гиков с разных областей!" />
        <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <Layout>
        <div className={styles.middleColumn}>
          <Post post={post} comments={comments}/>
        </div>
        <div className={styles.rightColumn}>
          <div className={`${styles.containerRight} ${isfixed ? styles.fixed : ''}`}>
            <LoginRight />
            <CreatePostRight />
            <Premium />
            <TopUsers />
            <NewsSliderSmall />
            <TopGroup />
            <Contacts />
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context : any) {

  const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPost/${context.params.post}`);
  const comments = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comment/getComments/${context.params.post}`);
  
  return {
    props: {
      post : await post?.json(),
      comments: await comments?.json()
    }, // will be passed to the page component as props
  }
}

export default OnePost;