import React, { useContext, useEffect, useState } from "react";
import styles from "./Subscribers.module.scss";
import { observer } from "mobx-react";
import ItemSubscriber from "./ItemSubscriber";
import "reactjs-popup/dist/index.css";

const Subscribers = ({ data }: any) => {
  return (
    <div className={styles.subs}>
      <h3 className={styles.title}>
        Подписчиков <span>{data ? data?.subscribers?.length : ""}</span>
      </h3>
      <div className={styles.list}>
        {data &&
          data.subscribers?.map((item: any, index: number) => (
            <ItemSubscriber user={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default observer(Subscribers);
