import React from 'react';
import styles from './Post.module.scss'
import HeaderPost from "../PostPreview/common/HeaderPost";
import Tag from "../Tag";
import Link from "next/link";
import HashTag from "../PostPreview/common/hashtag";
import Toolbar from "../PostPreview/common/toolbar";
import Comments from "../Comments";
import {useDispatch} from "react-redux";
import { open, addImg } from '../../../../features/Popup/PopupSlice'
import ImgPopup from "../ImgPopup";

const data = {
    tags: [{
      title: 'Популярное',
      important: true,
      postDay: false
    }],
    link: 'FrePro',
    date: '',
    name: 'Abobka69',
    title: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
    subtitle: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
    img: 'https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/5/3/5/8/28668535-1-eng-GB/%E3%82%BD%E3%83%8B%E3%83%BC%E4%B8%8A%EF%BC%89%E8%BF%BD%E5%8A%A0%E3%80%80%E9%AC%BC%E6%BB%85%E3%81%AE%E5%88%8320200805183428557_Data.jpg',
    images: ['https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/5/3/5/8/28668535-1-eng-GB/%E3%82%BD%E3%83%8B%E3%83%BC%E4%B8%8A%EF%BC%89%E8%BF%BD%E5%8A%A0%E3%80%80%E9%AC%BC%E6%BB%85%E3%81%AE%E5%88%8320200805183428557_Data.jpg',
      'https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/5/3/5/8/28668535-1-eng-GB/%E3%82%BD%E3%83%8B%E3%83%BC%E4%B8%8A%EF%BC%89%E8%BF%BD%E5%8A%A0%E3%80%80%E9%AC%BC%E6%BB%85%E3%81%AE%E5%88%8320200805183428557_Data.jpg'],
    hashTags: [{
      title: '#anime',
      link: 'anime'
    },
      {
        title: '#genshinimpact',
        link: 'genshinimpact'
      },
      {
        title: '#game',
        link: 'game'
      }],
    views: 324,
    count: 121,
    commentsCount: 32,
    comments: [
      {
        name: 'MetaVxnn',
        text: 'Привет Чувакочек',
        reply: [
          {
            name: 'MetaVxnn',
            text: 'кек',
            reply: [
              {
                name: 'MetaVxnn',
                text: 'кек',
              },
              {
                name: 'MetaVxnn',
                text: 'кек',
              }
            ]
          }
        ],
      },
      {
        name: 'MetaVxnn',
        text: 'Привет Чувакочек',
        reply: [
          {
            name: 'MetaVxnn',
            text: 'кек',
          },
          {
            name: 'MetaVxnn',
            text: 'кек',
            reply: [
              {
                name: 'MetaVxnn',
                text: 'кек',
              },
              {
                name: 'MetaVxnn',
                text: 'кек',
              }
            ]
          }
        ]
      },
      {
        name: 'MetaVxnn',
        text: 'Привет Чувакочек',
        img: 'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'
      },
      {
        name: 'MetaVxnn',
        text: 'Привет Чувакочек',
      }
    ]
  }

const Post = () => {
  return (
    <div className={styles.postContainer}>
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
      <section className={styles.mainInfo}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.subtitle}>{data.subtitle && data.subtitle}</p>
        <div className={styles.img}>
          <ImgPopup data={data} />
        </div>
      </section>
      <section className={styles.hashList}>
        {
          data.hashTags.map((item : any, index : number) => {
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
