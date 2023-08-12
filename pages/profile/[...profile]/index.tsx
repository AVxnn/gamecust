import React, { useContext, useEffect, useRef} from 'react';
import Head from "next/head";
import Header from "../../../components/legendary/header";
import Layout from "../../../components/layout";
import styles from './Profile.module.scss'
import CreatePostRight from "../../../components/legendary/RightBlock/CreatePostRight";
import Premium from "../../../components/legendary/RightBlock/Premium";
import TopUsers from "../../../components/legendary/RightBlock/TopUsers";
import NewsSliderSmall from "../../../components/legendary/RightBlock/NewsSliderSmall";
import TopGroup from "../../../components/legendary/RightBlock/TopGroup";
import Contacts from "../../../components/legendary/RightBlock/Contacts";
import BackWallpaper from "../../../components/legendary/BackWallpaper";
import LoginRight from "../../../components/legendary/RightBlock/LoginRight";
import ProfileBlock from "../../../components/legendary/MiddleBlock/Profile";
import { observer } from 'mobx-react-lite';
import { Context } from '../../_app';
import ChangeProfileBlock from '../../../components/legendary/MiddleBlock/ChangeProfileBlock';
import Subscriptions from '../../../components/legendary/RightBlock/Subscriptions';

const Profile = ({user, posts} : any) => {
  console.log(user, posts);
  
  const menuRef = useRef<HTMLUListElement>(null);

  const {mobxStore} = useContext(Context);
  
  useEffect(() => {
    console.log('work', localStorage.getItem('token'));
    if(localStorage.getItem('token')) {
      mobxStore.checkAuth()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Пост | GameCust</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="icon" href="" />
      </Head>
      <Header />
      <BackWallpaper />
      <Layout>
        <div className={styles.middleColumn}>
          <ProfileBlock data={user} />
          <div className={styles.postListContainer}>
            <ChangeProfileBlock data={posts}/>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <LoginRight />
          <Subscriptions user={user} />
          <CreatePostRight />
          <Premium />
          <TopUsers />
          <ul className={styles.fixedBar} ref={menuRef}></ul>
          <NewsSliderSmall />
          <TopGroup />
          <Contacts />
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context : any) {
// http://localhost:3000/editor/640b0a3f32ad4cf57431ff70/8b0532a0-cbee-06a2-6d36-b5aebb787bf2-MetaVxnn
  const userData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUser/${context.params.profile[0]}`);
  let user = await userData?.json()
  const postData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/filter/${user._id}`);
  
  return {
    props: {
      user : user,
      posts : await postData?.json(),
    }, // will be passed to the page component as props
  }
}

export default observer(Profile);