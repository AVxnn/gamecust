import React from "react";
import styles from "./SubscribersPopup.module.scss";
import Close from "../../../../../public/img/svg/close";
import Popup from "reactjs-popup";
import PopupItem from "../../Subscribers/PopupItem";

const SubscriptionsPopup = ({ data, setIsOpen, isOpen }: any) => {
  return (
    <Popup nested open={isOpen} onClose={() => setIsOpen(false)} modal>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            Подписки <span>{data ? data?.subscriptions?.length : ""}</span>
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
  );
};

export default SubscriptionsPopup;
