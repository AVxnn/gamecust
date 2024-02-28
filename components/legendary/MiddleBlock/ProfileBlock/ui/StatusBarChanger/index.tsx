import React, { Fragment, useContext, useState } from "react";
import styles from "./StatusBarChanger.module.scss";
import CheckStatus from "./ui/CheckStatus";
import IconItem from "./ui/IconItem";
import { Context } from "../../../../../../app/(pages)/layout";

const StatusBarChanger = () => {
  const { mobxStore } = useContext(Context);
  const [activeIcon, setActiveIcon] = useState(mobxStore.user.iconActive);

  return (
    <div className={styles.statusBar}>
      <p className={styles.title}>Установите статус</p>
      <CheckStatus icon={activeIcon} />
      <div className={styles.list}>
        {["premium", "moderator", "halloween", "artist", "heart"].map(
          (item: any, index: number) => {
            return (
              <Fragment key={item}>
                <IconItem
                  setActiveIcon={setActiveIcon}
                  currentIcon={activeIcon}
                  item={item}
                />
              </Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};

export default StatusBarChanger;
