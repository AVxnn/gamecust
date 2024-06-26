import React, { useState } from "react";
import styles from "./Subscribers.module.scss";
import { observer } from "mobx-react";
import ItemSubscriber from "./ItemSubscriber";
import "reactjs-popup/dist/index.css";
import SubscribersPopup from "./SubscribersPopup";
import Skeleton from "react-loading-skeleton";

const Subscribers = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.subs}>
      <h3 onClick={() => setIsOpen(true)} className={styles.title}>
        Подписчиков <span>{data ? data?.subscribers?.length : ""}</span>
      </h3>
      <div className={styles.list}>
        {data?.subscribers?.length >= 1 ? (
          data.subscribers?.map((item: any, index: number) => (
            <ItemSubscriber user={item} key={index} />
          ))
        ) : (
          <div style={{ display: "flex", gap: "12px" }} className={styles.post}>
            <Skeleton
              className={styles.borderR}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <Skeleton
              className={styles.borderR}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <Skeleton
              className={styles.borderR}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
            <Skeleton
              className={styles.borderR}
              width={"40px"}
              height={"40px"}
            ></Skeleton>
          </div>
        )}
      </div>
      <SubscribersPopup setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
    </div>
  );
};

export default observer(Subscribers);
