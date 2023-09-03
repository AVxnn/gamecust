import React, { useEffect, useState } from 'react';
import styles from './Post.module.scss'
import HeaderPost from "../PostPreview/common/HeaderPost";
import Tag from "../Tag";
import HashTag from "../PostPreview/common/hashtag";
import Toolbar from "../PostPreview/common/toolbar";
import Comments from "../Comments";
import ReactPlayer from 'react-player';
import ImgPopup from '../ImgPopup';
import Br from '../PostPreview/common/SelectForm/ui/Br';


const Post = ({data} : any) => {

  const [userData, setUserData] = useState() as any

  const getUser = async () => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserId/${data.userId}`);  

    setUserData(await user?.json())
  }

  useEffect(() => {
    getUser()
  }, [data])

  if (!data?.username) return <>Loading...</>
  
  return (
    <div className={styles.postContainer}>
      <HeaderPost data={data} user={userData}/>
      <section className={styles.tags}>
        {
          data?.tags?.map((item : any, index : number) => {
            return (
              <Tag key={index} data={item}></Tag>
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
                <h4 key={index} className={styles.title} dangerouslySetInnerHTML={{__html: item.value}}></h4>
              )
            } else if (item.type === 'text') {
              return (
                <p key={index} className={styles.subtitle} dangerouslySetInnerHTML={{__html: item.value}}></p>
              )
            } else if (item.type === 'link') {
              return (
                <div key={index} className={styles.mediaBlock}>
                  <ReactPlayer pip width="100%" className={styles.player} controls={true} url={item?.href} />
                </div>
              )
            } else if (item.type === 'media') {
              return (
                <ImgPopup key={index} data={item} />
              )
            } else if (item.type === 'br') {
              return (
                <Br key={index} data={item} />
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
      <Comments dataS={data}/>
    </div>
  );
};

export default Post;
