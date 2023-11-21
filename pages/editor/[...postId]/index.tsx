import React, { useContext, useEffect } from 'react';
import Head from "next/head";
import Header from "../../../components/legendary/header";
import Layout from "../../../components/layout";
import styles from './Editor.module.scss'
import EditorBlock from "../../../components/legendary/MiddleBlock/editorBlock";
import { Context } from '../../_app';
import { useRouter } from 'next/router';
import uuid from 'react-uuid';

const Editor = ({props} : any) => {
  
  const {mobxStore, postCreateStore, notificationStore} = useContext(Context);
  const router = useRouter();
  const { postId } = router.query
  
  useEffect(() => {
    const checkHandler = async () => {
      if(localStorage.getItem('token')) {
        console.log('checkUser');
        
        await mobxStore.checkAuth()
      }
      
      if (!mobxStore.user.isActivated) {
        notificationStore.addItem({title: 'Нужно выполнить авторизацию', status: 'error', timeLife: 2500})
        await router.push('/')
      }
    }
    checkHandler()

    if (props?.data?.length > 0) {
      postCreateStore.updateArray(props.data)
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
    <>
      <Head>
        <title>Опубликовать пост | GameCust</title>
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
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.middleColumn}>
          <EditorBlock />
        </div>
        <div className={styles.rightColumn}>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context : any) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPost/${context.params.postId[1]}`);
  
  return {
    props: {props : await res?.json()}, // will be passed to the page component as props
  }
}

export default Editor;
