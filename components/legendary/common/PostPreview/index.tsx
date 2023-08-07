import React from 'react';
import styles from './PostPreview.module.scss'
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "./common/hashtag";
import Toolbar from "./common/toolbar";
import HeaderPost from "./common/HeaderPost";
import ImageAndSlider from "../ImageAndSlider";
import Br from './common/SelectForm/ui/Br';

const PostPreview = ({data} : any) => {

  return (
    <div
      className={styles.postPreview}>
      <div className={styles.headerContainer}>
        <HeaderPost data={data}/>
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
      <Link className={styles.post} href={`/post/${data.postId}`}>
        <section className={styles.mainInfo}>
          {
            data?.stared.map((item: any, index: number) => {
              console.log(item);
              
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
  );
};

export default PostPreview;
