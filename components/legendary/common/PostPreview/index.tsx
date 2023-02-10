import React from 'react';
import styles from './PostPreview.module.scss'
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "./common/hashtag";
import Toolbar from "./common/toolbar";
import HeaderPost from "./common/HeaderPost";
import ImageAndSlider from "../ImageAndSlider";

const PostPreview = ({data} : any) => {
  return (
    <div className={styles.postPreview}>
      <HeaderPost data={data}/>
      <section className={styles.tags}>
        {
          data.tags.map((item : any, index : number) => {
            return (
              <Tag key={index} popular={item.important} postDay={item.postDay}>{item.title}</Tag>
            )
          })
        }
      </section>
      <Link className={styles.post} href={`/post/${data.link}`}>
        <section className={styles.mainInfo}>
          {
            data.container?.map((item: any, index: number) => {
              if (item.type === 'title') {
                return (
                  <h4 className={styles.title}>{item.text}</h4>
                )
              } else if (item.type === 'description') {
                return (
                  <p className={styles.subtitle}>{item.text}</p>
                )
              } else if (item.type === 'image') {
                return (
                  <ImageAndSlider data={item} />
                )
              }
            })
          }
        </section>
      </Link>
      <section className={styles.hashList}>
        {
          data.hashTags.map((item : any, index : number) => {
            return (
              <HashTag key={index} data={item}/>
            )
          })
        }
      </section>
      <Toolbar data={data} />
    </div>
  );
};

export default PostPreview;
