import React, { useContext } from "react";
import styles from "./InformationBlock.module.scss";
import Star from "../../../../../public/img/svg/Star";
import { Context } from "../../../../../app/(pages)/layout";
import Spoiler from "../../../../../public/img/svg/Spoiler";

const InformationBlock = ({ item }: any) => {
  const { postCreateStore } = useContext(Context);

  const staredHandler = (flag: boolean) => {
    postCreateStore.updateItem({ ...item, stared: flag });
  };

  const spoilerHandler = (flag: boolean) => {
    postCreateStore.updateItem({ ...item, spoiler: flag });
  };

  return (
    <div className={styles.container}>
      {item?.stared && (
        <div onClick={() => staredHandler(false)} className={styles.infoBlock}>
          <Star />
        </div>
      )}
      {item?.spoiler && (
        <div onClick={() => spoilerHandler(false)} className={`${styles.infoBlock} ${styles.spoiler}`}>
          <Spoiler />
        </div>
      )}
    </div>
  );
};

export default InformationBlock;
