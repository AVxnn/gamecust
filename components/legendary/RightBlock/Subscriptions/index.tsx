import React, { useState } from "react";
import styles from "./Subscriptions.module.scss";
import ItemSub from "./ItemSub";
import { observer } from "mobx-react";
import SubscriptionsPopup from "./SubscriptionsPopup";

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
      <SubscriptionsPopup setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
    </div>
  );
};

export default observer(Subscriptions);
