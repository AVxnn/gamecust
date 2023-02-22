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
    container: [
      {
        type: 'title',
        text: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"'
      },
      {
        type: 'description',
        text: 'И мы тоже имеем право выбирать каким мы хотим его видеть!'
      },
      {
        type: 'image',
        img: 'https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/5/3/5/8/28668535-1-eng-GB/%E3%82%BD%E3%83%8B%E3%83%BC%E4%B8%8A%EF%BC%89%E8%BF%BD%E5%8A%A0%E3%80%80%E9%AC%BC%E6%BB%85%E3%81%AE%E5%88%8320200805183428557_Data.jpg',
        images: []
      }
    ],
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
    container: [
      {
        type: 'title',
        text: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"'
      },
      {
        type: 'description',
        text: 'И мы тоже имеем право выбирать каким мы хотим его видеть!'
      },
      {
        type: 'image',
        img: '',
        images: ['https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/gege-akutami-author-of-jujutsu-kaisen.jpg', 'data:image/jpeg;base64,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']
      }
    ],
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
    container: [
      {
        type: 'title',
        text: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"'
      },
      {
        type: 'description',
        text: 'И мы тоже имеем право выбирать каким мы хотим его видеть!'
      },
      {
        type: 'image',
        img: 'https://avatars.mds.yandex.net/i?id=f719080b695cb652e117fe991264ab4cabaf0968-8306751-images-thumbs&n=13',
        images: []
      }
    ],
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
    container: [
      {
        type: 'title',
        text: 'Умоляю Комитет - верните ДТФ к тому что было!'
      },
      {
        type: 'description',
        text: 'Еще в среду вечером, увидев этот "редизайн", было понятно что все пойдет по пизде. Но зайдя вечером уже четверга я и представить не мог что будет даже хуже. Топовые люди на площадке уходят, блоги протестуют, подсайты тоже. И ради чего все это было? Неужели Комитету и администрации самого ДТФ настолько плевать на своих же пользователей и аудиторию? Мне очень обидно видеть все это и я пиздец как не хочу чтобы площадка, в которую я только по сути начал вливаться после многих лет ридонли, скатилась и канула в Лету. И не из-за пользователей, а из-за наплевательского отношения самого сайта.\n' +
          '\n' +
          'Комитет. Пожалуйста, умоляю вас, не убивайте сайт своими решениями! Не отнимайте у людей "свое место" к которому мы все привыкли! Есть куча проблем, которые надо исправить, то же приложение на телефоне дико порезано и не удобно. Исправьте его, а не ломайте что уже работает... Я очень привык к ДТФ и не хочу чтобы он опустел и погряз в ненависти к создателям...'
      }
    ],
    hashTags: [
      {
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
      }
    ],
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
    container: [
      {
        type: 'title',
        text: 'В продолжении к редизайну, есть ещё идея на следующий "апдейт"'
      },
      {
        type: 'description',
        text: 'И мы тоже имеем право выбирать каким мы хотим его видеть!'
      },
      {
        type: 'image',
        img: 'https://www.belpressa.ru/media/filer_public_thumbnails/filer_public/d5/4f/d54f5611-42dc-472a-bd19-15981dcf88c4/15_glavnaia.jpg__750x415_q75_crop-True_subsampling-2_upscale.jpg',
        images: []
      }
    ],
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
