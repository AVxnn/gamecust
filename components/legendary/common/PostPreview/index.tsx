import React, { useRef } from 'react';
import styles from './PostPreview.module.scss'
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "./common/hashtag";
import Toolbar from "./common/toolbar";
import HeaderPost from "./common/HeaderPost";
import ImageAndSlider from "../ImageAndSlider";
import { useInView } from 'framer-motion';

const PostPreview = ({data} : any) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1)"
      }}
      ref={ref}
      className={styles.postPreview}>
      <div className={styles.headerContainer}>
        <HeaderPost data={data}/>
      </div>
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
                  <h4 key={index} className={styles.title}>{item.text}</h4>
                )
              } else if (item.type === 'description') {
                return (
                  <p key={index} className={styles.subtitle}>{item.text}</p>
                )
              } else if (item.type === 'image') {
                return (
                  <ImageAndSlider key={index} data={item} />
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
      <div className={styles.toolBarContainer}>
        <Toolbar data={data} />
      </div>
    </div>
  );
};

export default PostPreview;
