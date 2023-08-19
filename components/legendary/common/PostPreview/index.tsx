import React, { useContext, useEffect, useState } from 'react';
import styles from './PostPreview.module.scss'
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "./common/hashtag";
import Toolbar from "./common/toolbar";
import HeaderPost from "./common/HeaderPost";
import ImageAndSlider from "../ImageAndSlider";
import Br from './common/SelectForm/ui/Br';
import { Context } from '../../../../pages/_app';

const PostPreview = ({data} : any) => {

  const {postCreateStore} = useContext(Context);
  const [userData, setUserData] = useState()
  const openPost = () => {
    let newData = data
    newData.viewsCount = data.viewsCount + 1
    console.log(newData);
    
    postCreateStore.updatePost(newData);
  }
  
  useEffect(() => {
    const getUser = async () => {
      const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserId/${data.userId}`);
      console.log(user);
      
      setUserData(await user?.json())
    }
    getUser()
  }, [])

  return userData ? (
    <div
      className={styles.postPreview}>
      <div className={styles.headerContainer}>
        <HeaderPost user={userData} data={data}/>
      </div>
      <section className={styles.tags}>
        {
          data?.tags?.map((item : any, index : number) => {
            return (
              <Tag key={index} popular={item.important} postDay={item.postDay}>{item.title}</Tag>
            )
          })
        }
      </section>
      <Link onClick={() => openPost()} className={styles.post} href={`/post/${data.postId}`}>
        <section className={styles.mainInfo}>
          {
            data?.stared.map((item: any, index: number) => {
              if (item.type === 'h1') {
                return (
                  <h4 key={index} className={styles.title}>{item.value}</h4>
                )
              } else if (item.type === 'text') {
                return (
                  <p key={index} className={styles.subtitle}>{item.value}</p>
                )
              } else if (item.type === 'media') {
                return (
                  <ImageAndSlider key={index} data={item} />
                )
              } else if (item.type === 'br') {
                return (
                  <Br key={index} data={item} />
                )
              }
            })
          }
        </section>
      </Link>
      <section className={styles.hashList}>
        {
          data?.hashTags?.map((item : any, index : number) => {
            return (
              <HashTag key={index} data={item}/>
            )
          })
        }
      </section>
      <div className={styles.toolBarContainer}>
        <Toolbar data={data} />
      </div>
    </div>
  ) : null
};

export default PostPreview;
