import React, { useContext } from "react";
import styles from "./Options.module.scss";
import ListIcon from "../../../../../../../public/img/svg/listIcon";
import { Context } from "../../../../../../../app/(pages)/layout";
import { observer } from "mobx-react-lite";
import Spoiler from "../../../../../../../public/img/svg/Spoiler";

const Options = ({ item }: any) => {
  const { postCreateStore, notificationStore } = useContext(Context);

  const changeList = () => {
    postCreateStore.updateItem({
      ...item,
      typeList: item.typeList === "ul" ? "ol" : "ul",
    });
  };

  if (item.type === "list") {
    return (
      <div onClick={() => changeList()} className={styles.item}>
        {item.typeList === "ol" ? (
          <>
            <ListIcon type={0} />
            <p className={styles.text}>Обычный</p>
          </>
        ) : (
          <>
            <ListIcon type={1} />
            <p className={styles.text}>Нумерованным</p>
          </>
        )}
      </div>
    );
  }

  return null;
};

export default observer(Options);
