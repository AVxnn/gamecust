import React, { useContext, useEffect, useState } from "react";
import styles from "./Subscriptions.module.scss";
import ItemSub from "./ItemSub";
import { observer } from "mobx-react";
import { useParams } from "next/navigation";

const Subscriptions = ({ data }: any) => {
  return (
    <div className={styles.subs}>
      <h3 className={styles.title}>
        Подписки <span>{data ? data?.subscriptions?.length : ""}</span>
      </h3>
      <div>
        {data &&
          data.subscriptions?.map((item: any, index: number) => (
            <ItemSub user={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default observer(Subscriptions);
