import React, { useState } from "react";
import styles from "./Subscribers.module.scss";
import { observer } from "mobx-react";
import ItemSubscriber from "./ItemSubscriber";
import "reactjs-popup/dist/index.css";
import SubscribersPopup from "./SubscribersPopup";

const Subscribers = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.subs}>
      <h3 onClick={() => setIsOpen(true)} className={styles.title}>
        Подписчиков <span>{data ? data?.subscribers?.length : ""}</span>
      </h3>
      <div className={styles.list}>
        {data &&
          data.subscribers?.map((item: any, index: number) => (
            <ItemSubscriber user={item} key={index} />
          ))}
      </div>
      <SubscribersPopup setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
    </div>
  );
};

export default observer(Subscribers);
