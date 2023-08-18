import React, { useEffect, useState } from 'react';
import styles from './PostList.module.scss'
import PostPreview from "../../common/PostPreview";
import NewsSlider from "../NewsSlider";

const PostList = ({PostData, fetchData} : any) => {

  const [items, setItems] = useState(PostData) as any;
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1) as any;

  const loadMore = async () => {
    console.log('workwed');
    
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const newItems = await fetchData(page);
    
    setItems(newItems);

    setIsLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight;

      if (isNearBottom) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <div className={styles.postList}>
      {
        items?.length ? items.map((item : any, index : number) => {
          if (item.news) {
            return (
              <NewsSlider key={index} />
            )
          }
          return (
            <PostPreview key={index} data={item} />
          )
        }) : (
          <h3 className={styles.blank}>Похоже тут пусто</h3>
        )
      }
    </div>
  );
};

export default PostList;
