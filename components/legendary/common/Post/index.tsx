import React from 'react';
import styles from './Post.module.scss'
import HeaderPost from "../PostPreview/common/HeaderPost";
import Tag from "../Tag";
import HashTag from "../PostPreview/common/hashtag";
import Toolbar from "../PostPreview/common/toolbar";
import Comments from "../Comments";
import Image from 'next/image'


const Post = ({data} : any) => {
  console.log(data);

  if (!data?.username) return <>'Loading...'</>
  
  return (
    <div className={styles.postContainer}>
      <HeaderPost data={data}/>
      <section className={styles.tags}>
        {
          data?.tags?.map((item : any, index : number) => {
            return (
              <Tag key={index} popular={item.important} postDay={item.postDay}>{item.title}</Tag>
            )
          })
        }
      </section>
      <section className={styles.mainInfo}>
        {
          data?.data?.map((item: any, index: number) => {
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
                <div className={styles.img}>
                  <Image key={index} layout={'fill'} src={process.env.NEXT_PUBLIC_API_URL + item?.href} className={styles.subtitle} alt=""/>
                </div>
              )
            }
          })
        }
      </section>
      <section className={styles.hashList}>
        {
          data?.hashTags?.map((item : any, index : number) => {
            return (
              <HashTag key={index} data={item}/>
            )
          })
        }
      </section>
      <div id='comments'></div>
      <Toolbar data={data} />
      <Comments data={data}/>
    </div>
  );
};

export default Post;
