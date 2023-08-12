import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from "../components/layout";
import Header from "../components/legendary/header";
import React, {useContext, useEffect, useRef, useState} from "react";
import UserLeft from "../components/legendary/LeftBlock/UserLeft";
import Navigation from "../components/legendary/MiddleBlock/Navigation";
import CreatePostRight from "../components/legendary/RightBlock/CreatePostRight";
import PostList from "../components/legendary/MiddleBlock/PostList";
import Premium from "../components/legendary/RightBlock/Premium";
import TopUsers from "../components/legendary/RightBlock/TopUsers";
import NewsSliderSmall from "../components/legendary/RightBlock/NewsSliderSmall";
import TopGroup from "../components/legendary/RightBlock/TopGroup";
import Contacts from "../components/legendary/RightBlock/Contacts";
import { Context } from './_app';
import { observer } from 'mobx-react-lite'

const Home = ({ props } : any) => {
  
  const menuRef = useRef<HTMLUListElement>(null);
  console.log(process.env.NEXT_PUBLIC_API_URL);
  
  const {mobxStore} = useContext(Context);
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      mobxStore.checkAuth()
    }
  }, [])

  return (
    <>
      <Head>
        <title>GameCust</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="shortcut ico" href="../public/favicon.svg" />
      </Head>
      <Header />
      <Layout>
        <div className={styles.leftColumn}>
          <div className={styles.navigationLeft}>
            <UserLeft />
            <UserLeft />
          </div>
        </div>
        <div className={styles.middleColumn}>
          <Navigation />
          <div className={styles.postListContainer}>
            <PostList PostData={props ? props : null} />
          </div>
        </div>
        <div className={styles.rightColumn}>
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
  )
}


export async function getServerSideProps(context : any) {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts`);
  
  return {
    props: {props : await res?.json()}, // will be passed to the page component as props
  }
}

export default observer(Home)
