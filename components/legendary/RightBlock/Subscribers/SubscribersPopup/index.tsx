import React from "react";
import styles from "./SubscribersPopup.module.scss";
import PopupItem from "../PopupItem";
import Close from "../../../../../public/img/svg/close";
import Popup from "reactjs-popup";

const SubscribersPopup = ({ data, setIsOpen, isOpen }: any) => {
  return (
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
  );
};

export default SubscribersPopup;
