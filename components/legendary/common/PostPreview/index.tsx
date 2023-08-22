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

  const openPost = () => {
    let newData = data
    newData.viewsCount = data.viewsCount + 1
    
    postCreateStore.updatePost(newData);
  }

  return (
    <div
      className={styles.postPreview}>
      <div className={styles.headerContainer}>
        <HeaderPost data={data}/>
      </div>
      { 
        data?.tags?.length ? (
          <section className={styles.tags}>
            {
              data.tags.map((item : any, index : number) => {
                return (
                  <Tag key={index} data={item}>{item.title}</Tag>
                )
              })
            }
          </section>
        ) : null
      }
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
                  <div key={index} className={styles.container}>
                      <div className={styles.br}>
                          <div className={styles.oval}></div>
                          <div className={styles.oval}></div>
                          <div className={styles.oval}></div>
                      </div> 
                  </div>
                )
              }
            })
          }
        </section>
      </Link>
      { 
        data?.hashTags?.length ? (
          <section className={styles.hashList}>
            {
              data?.hashTags?.map((item : any, index : number) => {
                return (
                  <HashTag key={index} data={item}/>
                )
              })
            }
          </section>
        ) : null
      }
      <div className={styles.toolBarContainer}>
        <Toolbar data={data} />
      </div>
    </div>
  );
};

export default PostPreview;
