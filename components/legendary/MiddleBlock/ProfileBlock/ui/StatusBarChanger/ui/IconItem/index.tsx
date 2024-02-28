import React from "react";
import styles from "./IconItem.module.scss";
import IconHandler from "../../../../../../common/PostPreview/common/IconHandler";

const IconItem = ({ item, setActiveIcon, currentIcon }: any) => {
  return (
    <div
      onClick={() => setActiveIcon(item)}
      className={`${currentIcon === item ? styles.iconActive : styles.icon}`}
    >
      <IconHandler user={{ iconActive: item }} />
    </div>
  );
};

export default IconItem;
