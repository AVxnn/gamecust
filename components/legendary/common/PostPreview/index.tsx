import React from 'react';
import styles from './PostPreview.module.scss'
import CheckIcon from '../../../../public/img/svg/CheckIcon'
import Mark from '../../../../public/img/svg/Mark'
import Chat from '../../../../public/img/svg/Chat'
import Arrow from '../../../../public/img/svg/Arrow'
import Eye from '../../../../public/img/svg/Eye'
import Button from "../Button";
import Tag from "../Tag";

const data = [
  {
    title: 'Популярное',
    important: true,
    postDay: false
  },
  {
    title: 'Пост дня',
    important: false,
    postDay: true
  },
  {
    title: 'Интервью',
    important: false,
    postDay: false
  }
]

const PostPreview = () => {
  return (
    <div className={styles.postPreview}>
      <header className={styles.header}>
        <div className={styles.leftBlock}>
          <img className={styles.avatar} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
          <span className={styles.name}>MetaVxnn <CheckIcon /></span>
          <span className={styles.date}>3  часа</span>
        </div>
        <Button type={'secondary'} full={false} size={'small'}>
          Подписаться
        </Button>
      </header>
      <section className={styles.tags}>
        {
          data.map((item : any, index : number) => {
            return (
              <Tag key={index} popular={item.important} postDay={item.postDay}>{item.title}</Tag>
            )
          })
        }
      </section>
      <section className={styles.mainInfo}>
        <h4 className={styles.title}>В продолжении к редизайну, есть ещё идея на следующий "апдейт"</h4>
        <img className={styles.img} src='https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/5/3/5/8/28668535-1-eng-GB/%E3%82%BD%E3%83%8B%E3%83%BC%E4%B8%8A%EF%BC%89%E8%BF%BD%E5%8A%A0%E3%80%80%E9%AC%BC%E6%BB%85%E3%81%AE%E5%88%8320200805183428557_Data.jpg' alt={''} />
      </section>
      <section className={styles.hashList}>
        <span className={styles.hashtag}>#anime</span>
        <span className={styles.hashtag}>#genshinimpact</span>
        <span className={styles.hashtag}>#game</span>
      </section>
      <section className={styles.toolbar}>
        <div className={styles.leftBlock}>
          <div className={styles.views}>
            <Eye />
            <span className={styles.title}>325</span>
          </div>
          <div className={styles.mark}>
            <Mark />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.comments}>
            <Chat />
            <span className={styles.title}>123</span>
          </div>
          <div className={styles.counter}>
            <div className={styles.dislike}>
              <Arrow />
            </div>
            <span className={styles.title}>123</span>
            <div className={styles.like}>
              <Arrow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPreview;
