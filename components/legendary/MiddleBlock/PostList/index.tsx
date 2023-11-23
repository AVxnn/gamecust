import React, { useEffect, useState } from 'react';
import styles from './PostList.module.scss'
import Empty from '../../common/Empty';
import PostItem from '../../../../newComponents/post/postItem';

const PostList = ({PostData, fetchData, textEmpty} : any) => {

  const [items, setItems] = useState(PostData) as any;
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1) as any;

  const [userData, setUserData] = useState() as any;

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    setItems(PostData)
  }, [PostData]);

  return items.length ? (
    <div className={styles.postList}>
      {
        items.map((item : any, index : number) => {
          return (
            <PostItem key={index} data={item}/>
          )
        })
      }
      <Empty text={'Похоже это конец'} />
    </div>
  ) : <Empty text={'Похоже тут пусто'} subtext={textEmpty} />
};

export default PostList;
