import React from 'react';
import styles from './PostPreview.module.scss'
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "./common/hashtag";
import Toolbar from "./common/toolbar";
import HeaderPost from "./common/HeaderPost";

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
          <h4 className={styles.title}>{data.title}</h4>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <img className={styles.img} src={data.img} alt={''} />
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
