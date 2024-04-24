import React from "react";
import styles from "./IconItem.module.scss";
import IconHandler from "../../../../../../common/PostPreview/common/IconHandler";

const IconItem = ({ item, setActiveIcon, currentIcon }: any) => {
  return (
    <div
      onClick={() => setActiveIcon(item)}
      className={`${styles.icon} ${currentIcon === item && styles.iconActive}`}
    >
      <IconHandler user={{ iconActive: item }} />
    </div>
  );
};

export default IconItem;
