import React, { useState } from "react";
import styles from "./Subscriptions.module.scss";
import ItemSub from "./ItemSub";
import { observer } from "mobx-react";
import SubscriptionsPopup from "./SubscriptionsPopup";
import Skeleton from "react-loading-skeleton";

const Subscriptions = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.subs}>
      <h3 onClick={() => setIsOpen(true)} className={styles.title}>
        Подписки <span>{data ? data?.subscriptions?.length : ""}</span>
      </h3>
      <div>
        {data?.subscriptions?.length >= 1 ? (
          data.subscriptions?.map((item: any, index: number) => (
            <ItemSub user={item} key={index} />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              margin: "6px 14px",
              flexDirection: "column",
              gap: "6px",
            }}
            className={styles.post}
          >
            <div className={styles.row}>
              <Skeleton
                className={styles.borderR}
                width={"40px"}
                height={"40px"}
              ></Skeleton>
              <Skeleton
                className={styles.borderR}
                width={"120px"}
                height={"24px"}
              ></Skeleton>
            </div>
            <div className={styles.row}>
              <Skeleton
                className={styles.borderR}
                width={"40px"}
                height={"40px"}
              ></Skeleton>
              <Skeleton
                className={styles.borderR}
                width={"90px"}
                height={"24px"}
              ></Skeleton>
            </div>
            <div className={styles.row}>
              <Skeleton
                className={styles.borderR}
                width={"40px"}
                height={"40px"}
              ></Skeleton>
              <Skeleton
                className={styles.borderR}
                width={"70px"}
                height={"24px"}
              ></Skeleton>
            </div>
          </div>
        )}
      </div>
      <SubscriptionsPopup setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
    </div>
  );
};

export default observer(Subscriptions);
