import React, { useContext, useEffect, useState } from "react";
import styles from "./notificationListMain.module.scss";
import { Context } from "../../../../app/(pages)/layout";
import NotificationItem from "../notificationItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../../newComponents/post/postList/loading";
import Empty from "../../common/Empty";

const NotificationListMain = ({ fetchPosts }: any) => {
  const { mobxStore } = useContext(Context);
  const [hasMore, setHasMore] = useState(true);

  const [posts, setPosts] = useState([]) as any;
  const [page, setPage] = useState(1) as any;

  const getMorePost = async () => {
    const res = await fetchPosts(mobxStore.user.id, page);
    const newPosts = await res;

    if (newPosts.length <= 10) {
      setHasMore(false);
    }
    setPosts((post: any) => [...post, ...newPosts]);
    setPage(page + 1);
  };

  const getFirstPosts = async () => {
    const res = await fetchPosts(mobxStore.user.id, 0);
    const newPosts = await res;

    if (newPosts.length < 10) {
      setHasMore(false);
    }
    setPosts((post: any) => [...newPosts]);
  };

  useEffect(() => {
    getFirstPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        className={styles.list}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={<Empty text={"Лента закончилась"} />}
      >
        {posts.map((data: any, index: any) => (
          <NotificationItem key={index} item={data} />
        ))}
      </InfiniteScroll>
    </>
    //   <div className={styles.nofitication}>
    //   <div
    //     onClick={() => setDropMenu(!dropMenu)}
    //     ref={labelRef}
    //     className={styles.icon}
    //   >
    //     <Bell />
    //     {
    //       data.length >= 1 && <div className={styles.value}>{data.length}</div>
    //     }
    //   </div>
    //   <AnimatePresence initial={false} mode="wait">
    //     {dropMenu && (
    //       <motion.div
    //         exit={{ opacity: 0 }}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         ref={popupRef}
    //         className={styles.dropdown}
    //       >
    //         <div className={styles.header}>
    //           <h4 className={styles.title}>Уведомления</h4>

    //           <Link className={styles.showMore} href={"/nv/notifications"}>
    //             Посмотреть еще
    //           </Link>
    //         </div>
    //         <div className={styles.list}>
    //           {
    //             data.length >= 1 ? data.map((item: any, index: number) => {
    //               return <NotificationItem key={index} item={item} />

    //             }) : (
    //               <>
    //                 Похоже у вас нет уведомлений
    //               </>
    //             )
    //           }
    //         </div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
  );
};

export default NotificationListMain;
