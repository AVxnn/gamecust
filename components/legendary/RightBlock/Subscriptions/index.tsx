import React, { useContext, useEffect, useState } from "react";
import styles from "./Subscriptions.module.scss";
import ItemSub from "./ItemSub";
import Popup from "reactjs-popup";
import { observer } from "mobx-react";
import { useParams } from "next/navigation";
import Close from "../../../../public/img/svg/close";
import PopupItem from "../Subscribers/PopupItem";

const Subscriptions = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.subs}>
      <h3 onClick={() => setIsOpen(true)} className={styles.title}>
        Подписки <span>{data ? data?.subscriptions?.length : ""}</span>
      </h3>
      <div>
        {data &&
          data.subscriptions?.map((item: any, index: number) => (
            <ItemSub user={item} key={index} />
          ))}
      </div>
      <Popup nested open={isOpen} onClose={() => setIsOpen(false)} modal>
        <div className={styles.popup}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              Подписки <span>{data ? data?.subscribers?.length : ""}</span>
            </h3>
            <div className={styles.close} onClick={() => setIsOpen(false)}>
              <Close />
            </div>
          </div>
          <div className={styles.list}>
            {data &&
              data.subscriptions?.map((item: any, index: number) => (
                <PopupItem close={setIsOpen} user={item} key={index} />
              ))}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default observer(Subscriptions);
