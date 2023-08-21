import React, { useEffect, useState } from 'react';
import styles from './PostList.module.scss'
import PostPreview from "../../common/PostPreview";
import NewsSlider from "../NewsSlider";
import Empty from '../../common/Empty';

const PostList = ({PostData, fetchData} : any) => {

  const [items, setItems] = useState(PostData) as any;
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1) as any;

  const loadMore = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const newItems = await fetchData(page);

    if (newItems.length === 0) {
      // Все данные загружены, больше нет данных
      return;
    }
    
    await setItems([...items, ...newItems]);
    
    
    setIsLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        window.innerHeight + document.documentElement.scrollTop + 600 >=
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

  return items?.length ? (
    <div className={styles.postList}>
      {
        items?.length ? items.map((item : any, index : number) => {
          if (index > 0 && index % 6 == 0) {
            return (
                <div className={styles.container} key={index}>
                  <NewsSlider />
                  <PostPreview data={item} />
                </div>
            )
          }
          return (
            <PostPreview key={index} data={item} />
          )
        }) : null
      }
    </div>
  ) :<Empty text={'Похоже тут пусто'} subtext={'Создайте свой первый пост'} />
};

export default PostList;
