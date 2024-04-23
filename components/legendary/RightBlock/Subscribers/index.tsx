import React, { useContext, useEffect, useState } from "react";
import styles from "./Subscribers.module.scss";
import { observer } from "mobx-react";
import Popup from "reactjs-popup";
import ItemSubscriber from "./ItemSubscriber";
import "reactjs-popup/dist/index.css";
import Close from "../../../../public/img/svg/close";
import PopupItem from "./PopupItem";

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
      <Popup nested open={isOpen} onClose={() => setIsOpen(false)} modal>
        <div className={styles.popup}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              Подписчиков <span>{data ? data?.subscribers?.length : ""}</span>
            </h3>
            <div className={styles.close} onClick={() => setIsOpen(false)}>
              <Close />
            </div>
          </div>
          <div className={styles.list}>
            {data &&
              data.subscribers?.map((item: any, index: number) => (
                <PopupItem close={setIsOpen} user={item} key={index} />
              ))}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default observer(Subscribers);
