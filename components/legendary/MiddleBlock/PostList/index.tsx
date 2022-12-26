import React from 'react';
import styles from './PostList.module.scss'
import PostPreview from "../../common/PostPreview";
import NewsSlider from "../NewsSlider";

const data = [
  {
    news: 0
  },
  {
    news: 0
  },
  {
    news: 0
  },
  {
    news: true
  },
  {
    news: 0
  },
  {
    news: 0
  },
  {
    news: 0
  },
  {
    news: 0
  }
]

const PostList = () => {
  return (
    <div className={styles.postList}>
      {
        data.map((item : any, index : number) => {
          if (item.news) {
            return (
              <NewsSlider />
            )
          }
          return (
            <PostPreview />
          )
        })
      }
    </div>
  );
};

export default PostList;
