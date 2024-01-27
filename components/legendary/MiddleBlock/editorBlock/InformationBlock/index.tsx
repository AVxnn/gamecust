import React, { useContext } from "react";
import styles from "./InformationBlock.module.scss";
import Star from "../../../../../public/img/svg/Star";
import { Context } from "../../../../../app/(pages)/layout";

const InformationBlock = ({ item }: any) => {
  const { postCreateStore } = useContext(Context);

  const staredHandler = (flag: boolean) => {
    if (item.type !== "h1") {
      console.log("addStar", item.id, postCreateStore.data);
      postCreateStore.updateItem({ ...item, stared: flag });
    }
  };

  return (
    <div className={styles.container}>
      {item?.stared && (
        <div onClick={() => staredHandler(false)} className={styles.infoBlock}>
          <Star />
        </div>
      )}
    </div>
  );
};

export default InformationBlock;
