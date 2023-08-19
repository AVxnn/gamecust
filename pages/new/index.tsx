import Head from 'next/head'
import React, {useContext, useEffect, useRef} from "react";
import { observer } from 'mobx-react'
import PostList from '../../components/legendary/MiddleBlock/PostList';
import Header from '../../components/legendary/header';
import MainLayout from '../../components/layout/MainLayout';
import { Context } from '../_app';

const New = ({ props } : any) => {
  
  const menuRef = useRef<HTMLUListElement>(null);
  console.log(process.env.NEXT_PUBLIC_API_URL);

  const {mobxStore} = useContext(Context);
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      mobxStore.checkAuth()
    }
  }, [])

  const fetchData = async (page : any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/${page}`);
  
    return await res?.json()
  }
  
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
        <link rel="shortcut ico" href="../public/favicon.png" />
      </Head>
      <Header />
      <MainLayout>
        <PostList PostData={props ? props : null} fetchData={fetchData}/>
      </MainLayout>
    </>
  )
}


export async function getServerSideProps(context : any) {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/1`);
  
  return {
    props: {props : await res?.json()}, // will be passed to the page component as props
  }
}

export default observer(New)
