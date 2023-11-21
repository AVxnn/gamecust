import Head from 'next/head'
import React, {useContext, useEffect, useRef, useState} from "react";
import { observer } from 'mobx-react-lite'
import { Context } from '../_app';
import PostList from '../../components/legendary/MiddleBlock/PostList';
import Header from '../../components/legendary/header';
import MainLayout from '../../components/layout/MainLayout';

const Subscriptions = ({ props } : any) => {

  const [data, setData] = useState([]) as any;
  
  const {mobxStore} = useContext(Context);

  const fetchData = async (page : any, type = false ) => {
    let resultData = null as any
    if (type) {
      resultData = props
    } else {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/${page}`);
      resultData = await response?.json();
    }
    console.log(resultData);
    
    let resultProps = [] as any;
    let result = mobxStore?.user?.subscriptions?.forEach(subscription => {
        resultProps = resultData.filter((i : any) => i.userId === subscription)
    })
    setData(resultProps);
    
    return resultProps
  }
  
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => fetchData(0, true))
    return () => {
      document.removeEventListener("DOMContentLoaded", () => fetchData(0, true))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Head>
        <title>GameCust</title>
        <meta name="description" content="Социальная сеть для геймеров и гиков с разных областей!" />
        <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />\
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link rel="shortcut ico" href="../public/favicon.png" />
      </Head>
      <Header />
      <MainLayout>
        <PostList PostData={data} fetchData={fetchData} textEmpty={'В разработке'}/>
      </MainLayout>
    </>
  )
}


export async function getServerSideProps(context : any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/0`);
  
  return {
    props: {props : await res?.json()}, // will be passed to the page component as props
  }
}

export default observer(Subscriptions)
