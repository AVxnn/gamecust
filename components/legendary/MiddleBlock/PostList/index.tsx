import React from 'react';
import styles from './PostList.module.scss'
import PostPreview from "../../common/PostPreview";
import NewsSlider from "../NewsSlider";

const data = [
  {
    tags: [{
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
      }],
    link: 'preType',
    date: '',
    name: 'MetaVxnn',
    title: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
    subtitle: 'Еще в среду вечером, увидев этот "редизайн", было понятно что все пойдет по пизде. Но зайдя вечером уже четверга я и представить не мог что будет даже хуже. Топовые люди на площадке уходят, блоги протестуют, подсайты тоже. И ради чего все это было? Неужели Комитету и администрации самого ДТФ настолько плевать на своих же пользователей и аудиторию? Мне очень обидно видеть все это и я пиздец как не хочу чтобы площадка, в которую я только по сути начал вливаться после многих лет ридонли, скатилась и канула в Лету. И не из-за пользователей, а из-за наплевательского отношения самого сайта.\n' +
      '\n' +
      'Комитет. Пожалуйста, умоляю вас, не убивайте сайт своими решениями! Не отнимайте у людей "свое место" к которому мы все привыкли! Есть куча проблем, которые надо исправить, то же приложение на телефоне дико порезано и не удобно. Исправьте его, а не ломайте что уже работает... Я очень привык к ДТФ и не хочу чтобы он опустел и погряз в ненависти к создателям...',
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
    comments: 32
  },
  {
    news: true
  },
  {
    tags: [{
        title: 'Популярное',
        important: true,
        postDay: false
    }],
    link: 'FrePro',
    date: '',
    name: 'Abobka69',
    title: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
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
    comments: 32
  },
  {
    tags: [{
        title: 'Популярное',
        important: true,
        postDay: false
    }],
    link: 'FrePro',
    date: '',
    name: 'Abobka69',
    title: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
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
    comments: 32
  },
  {
    tags: [{
        title: 'Популярное',
        important: true,
        postDay: false
    }],
    link: 'FrePro',
    date: '',
    name: 'Abobka69',
    title: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
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
    comments: 32
  },
  {
    tags: [{
        title: 'Популярное',
        important: true,
        postDay: false
    }],
    link: 'FrePro',
    date: '',
    name: 'Abobka69',
    title: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"',
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
    comments: 32
  }
]

const PostList = () => {
  return (
    <div className={styles.postList}>
      {
        data.map((item : any, index : number) => {
          if (item.news) {
            return (
              <NewsSlider key={index} />
            )
          }
          return (
            <PostPreview key={index} data={item} />
          )
        })
      }
    </div>
  );
};

export default PostList;
