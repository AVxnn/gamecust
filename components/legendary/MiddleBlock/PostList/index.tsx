import React from 'react';
import styles from './PostList.module.scss'
import PostPreview from "../../common/PostPreview";
import NewsSlider from "../NewsSlider";

const PostList = ({PostData} : any) => {
  return (
    <div className={styles.postList}>
      {
        PostData && PostData.map((item : any, index : number) => {
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
