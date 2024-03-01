import React, { memo, useEffect, useState } from "react";
import styles from "./categoriesList.module.scss";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import getCategories from "../../features/new/getCategories/getCategories";
import Empty from "../../components/legendary/common/Empty";
import Link from "next/link";

const CategoriesList = memo(function CategoriesList() {
  const [hasMore, setHasMore] = useState(true);

  const [categories, setCategories] = useState([]) as any;
  const [page, setPage] = useState(1) as any;

  const getMorePost = async () => {
    const res = await getCategories(page);
    const newPosts = await res;

    if (newPosts.length <= 10) {
      setHasMore(false);
    }
    setCategories((post: any) => [...post, ...newPosts]);
    setPage(page + 1);
  };
  
  const getFirstPosts = async () => {
    const res = await getCategories(0);
    const newPosts = await res;

    if (newPosts.length < 10) {
      setHasMore(false);
    }
    setCategories((post: any) => [...newPosts]);
  };

  useEffect(() => {
    getFirstPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <InfiniteScroll
        dataLength={categories.length}
        next={getMorePost}
        className={styles.list}
        hasMore={hasMore}
        loader={<></>}
      >
        {categories.map((item: any) => {
          return (
            <Link key={item.title} href={`/category/${item._id}`}>
              <div className={styles.item}>
                <div className={styles.image}>
                  <Image src={item.imagePath} alt={"img"} layout={"fill"} />
                </div>
                <p className={styles.title}>{item.title}</p>
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
});

export default CategoriesList;
