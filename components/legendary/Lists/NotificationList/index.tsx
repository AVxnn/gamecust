import React, { useContext, useEffect, useState } from "react";
import styles from "./NotificationList.module.scss";
import { Context } from "../../../../app/(pages)/layout";
import { observer } from "mobx-react-lite";
import { getNotificationList } from "../../../../features/new/getNotifications/getNotifications";
import NotificationItem from "../../MiddleBlock/notificationItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../../newComponents/post/postList/loading";
import Empty from "../../common/Empty";

const NotificationList = () => {
  const { mobxStore } = useContext(Context);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]) as any;
  const [page, setPage] = useState(1) as any;

  const getMorePost = async () => {
    const res = await getNotificationList(mobxStore.user.id, page);
    const newPosts = await res;

    if (newPosts.length <= 10) {
      setHasMore(false);
    }
    setData((noticifation: any) => [...noticifation, ...newPosts]);
    setPage(page + 1);
  };

  const getFirstPosts = async () => {
    const res = await getNotificationList(mobxStore.user.id, 0);
    const newPosts = await res;

    if (newPosts.length < 10) {
      setHasMore(false);
    }
    setData((post: any) => [...newPosts]);
  };

  useEffect(() => {
    if (mobxStore.user.id) {
      getFirstPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobxStore.user.id]);

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={getMorePost}
        className={styles.list}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={<Empty text={"Конец ;)"} />}
      >
        {data.map((item: any, index: number) => {
          return <NotificationItem key={index} item={item} />;
        })}
      </InfiniteScroll>
    </>
  );
};

export default observer(NotificationList);
