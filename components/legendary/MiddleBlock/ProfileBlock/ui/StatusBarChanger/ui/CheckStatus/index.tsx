import React, { useContext } from "react";
import styles from "./CheckStatus.module.scss";
import ImageLoader from "react-imageloader";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../../../../../app/(pages)/layout";
import IconHandler from "../../../../../../common/PostPreview/common/IconHandler";

const CheckStatus = ({ icon }: any) => {
  const { mobxStore } = useContext(Context);

  return (
    <div className={styles.statusBar}>
      <div className={styles.containerAvatar}>
        <Image
          className={styles.avatar}
          width={42}
          height={42}
          alt={""}
          src={mobxStore.user.avatarPath}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>
          {mobxStore.user.username} <IconHandler user={{ iconActive: icon }} />
        </span>
        <div className={styles.downinfo}>
          <span className={styles.date}>22.02.2004</span>
        </div>
      </div>
    </div>
  );
};

export default observer(CheckStatus);
